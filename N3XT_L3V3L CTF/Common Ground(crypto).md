![!\[alt text\](image.png)](screenshots/commonground.png)

```python
#!/usr/bin/env python3
import re
import socket
from dataclasses import dataclass
from typing import Tuple

try:
    from Crypto.Cipher import AES
except ImportError as e:
    raise SystemExit("PyCryptodome is required. Install with: pip install pycryptodome") from e


HOST = "185.207.251.177"
PORT = 1400

BANNER_KEYS = [
    "N_common", "e1", "c1", "e2", "c2",
    "N1", "C1",
    "N2", "Encrypted_C2_Payload",  # hex
    "N3", "C3",
]

@dataclass
class Part1:
    N_common: int
    e1: int
    c1: int
    e2: int
    c2: int

@dataclass
class Part2:
    N1: int
    C1: int
    N2: int
    EncC2_hex: str
    N3: int
    C3: int


def recv_until(sock: socket.socket, needle: bytes) -> bytes:
    data = b""
    while needle not in data:
        chunk = sock.recv(4096)
        if not chunk:
            break
        data += chunk
    return data


def parse_banner(text: str) -> Tuple[Part1, Part2]:
    # Extract integers and hex payload via regex robustly
    def grab(name: str, pattern: str, cast=int):
        m = re.search(pattern, text)
        if not m:
            raise ValueError(f"Could not parse {name}")
        return cast(m.group(1))

    N_common = grab("N_common", r"N_common\s*=\s*(\d+)")
    e1 = grab("e1", r"e1\s*=\s*(\d+)")
    c1 = grab("c1", r"c1\s*=\s*(\d+)")
    e2 = grab("e2", r"e2\s*=\s*(\d+)")
    c2 = grab("c2", r"c2\s*=\s*(\d+)")

    N1  = grab("N1", r"N1\s*=\s*(\d+)")
    C1  = grab("C1", r"C1\s*=\s*(\d+)")
    N2  = grab("N2", r"N2\s*=\s*(\d+)")
    EncC2_hex = grab("Encrypted_C2_Payload", r"Encrypted_C2_Payload\s*\(HEX\)\s*=\s*([0-9a-fA-F]+)", str)
    N3  = grab("N3", r"N3\s*=\s*(\d+)")
    C3  = grab("C3", r"C3\s*=\s*(\d+)")

    return Part1(N_common, e1, c1, e2, c2), Part2(N1, C1, N2, EncC2_hex, N3, C3)


def egcd(a: int, b: int) -> tuple:
    """
    Iterative extended gcd.
    Returns (g, x, y) such that g = gcd(a,b) and a*x + b*y = g.
    """
    a0, b0 = a, b
    x0, x1 = 1, 0
    y0, y1 = 0, 1
    while b0 != 0:
        q = a0 // b0
        a0, b0, x0, x1, y0, y1 = b0, a0 - q * b0, x1, x0 - q * x1, y1, y0 - q * y1
    return a0, x0, y0

def invmod(a: int, n: int) -> int:
    """
    Modular inverse using iterative egcd. Raises ValueError if inverse doesn't exist.
    """
    if n <= 0:
        raise ValueError("modulus must be positive")
    g, x, _ = egcd(a % n, n)
    if g != 1:
        raise ValueError("Inverse does not exist (gcd != 1)")
    return x % n


def modexp_signed(base: int, exp: int, mod: int) -> int:
    if exp >= 0:
        return pow(base, exp, mod)
    # base^(-k) mod n == inv(base)^k mod n
    inv = invmod(base % mod, mod)
    return pow(inv, -exp, mod)


def common_modulus_recover_key(p1: Part1) -> int:
    # Given c1 = m^e1 mod n, c2 = m^e2 mod n, and gcd(e1,e2)=1
    # Find a,b with a*e1 + b*e2 = 1 then m = c1^a * c2^b mod n
    g, a, b = egcd(p1.e1, p1.e2)
    if g != 1:
        raise ValueError("e1 and e2 must be coprime for common modulus attack")
    term1 = modexp_signed(p1.c1, a, p1.N_common)
    term2 = modexp_signed(p1.c2, b, p1.N_common)
    m = (term1 * term2) % p1.N_common
    return m


def crt_three(c1: int, n1: int, c2: int, n2: int, c3: int, n3: int) -> int:
    # Combine using standard CRT, assuming pairwise coprime moduli
    from math import gcd
    if gcd(n1, n2) != 1 or gcd(n1, n3) != 1 or gcd(n2, n3) != 1:
        raise ValueError("Moduli are not pairwise coprime; CRT with 3-terms requires generalization")

    N = n1 * n2 * n3
    N1 = N // n1
    N2 = N // n2
    N3 = N // n3

    inv1 = invmod(N1 % n1, n1)
    inv2 = invmod(N2 % n2, n2)
    inv3 = invmod(N3 % n3, n3)

    x = (c1 * N1 * inv1 + c2 * N2 * inv2 + c3 * N3 * inv3) % N
    return x, N


def iroot_k(n: int, k: int) -> Tuple[int, bool]:
    # Integer k-th root via binary search
    if n < 0:
        raise ValueError("iroot_k only supports non-negative n")
    lo, hi = 0, 1
    while hi ** k <= n:
        hi <<= 1
    while lo < hi:
        mid = (lo + hi) // 2
        p = mid ** k
        if p == n:
            return mid, True
        if p < n:
            lo = mid + 1
        else:
            hi = mid
    return lo - 1, (lo - 1) ** k == n


def main():
    # 1) Connect and read the banner
    with socket.create_connection((HOST, PORT), timeout=10) as s:
        data = recv_until(s, b"> ")
        text = data.decode("utf-8", "replace")
        # print(text)  # Uncomment to inspect raw banner

        # 2) Parse parameters
        p1, p2 = parse_banner(text)

        # 3) Recover AES session key via RSA common modulus attack
        aes_key_int = common_modulus_recover_key(p1)
        # Key is 16 random bytes; force big-endian width 16
        try:
            key_bytes = aes_key_int.to_bytes(16, "big")
        except OverflowError:
            # If it is larger than 16 bytes, keep the least significant 16 bytes
            kb = aes_key_int.to_bytes((aes_key_int.bit_length() + 7) // 8, "big")
            key_bytes = kb[-16:]

        # 4) Decrypt the Embassy #2 payload to get C2 (the RSA e=3 ciphertext for N2)
        enc_c2 = bytes.fromhex(p2.EncC2_hex)
        if len(enc_c2) % 16 != 0:
            raise ValueError(f"Encrypted_C2_Payload length not multiple of 16: {len(enc_c2)}")
        cipher = AES.new(key_bytes, AES.MODE_ECB)
        padded_c2 = cipher.decrypt(enc_c2)
        c2_broadcast = int.from_bytes(padded_c2, "big")

        # 5) Håstad's broadcast attack for e=3 using CRT
        x, N = crt_three(p2.C1, p2.N1, c2_broadcast, p2.N2, p2.C3, p2.N3)
        # x == m^3 mod N; if m^3 < N, then x == m^3 over integers
        m, exact = iroot_k(x, 3)
        if not exact:
            # Try a couple of neighbors in case of off-by-one due to formatting
            found = False
            for delta in range(-5, 6):
                if delta == 0:
                    continue
                r, ok = iroot_k(x + delta, 3)
                if ok:
                    m = r
                    exact = True
                    found = True
                    break
            if not found:
                raise ValueError("Cube root not exact. Broadcast condition m^3 < N may be violated.")

        flag_bytes = m.to_bytes((m.bit_length() + 7) // 8, "big")
        # The server compares raw bytes; print safely
        print(flag_bytes)

        # 6) Optional: send it back to the service to verify
        s.sendall(flag_bytes + b"\n")
        result = recv_until(s, b"Connection")
        print(result.decode("utf-8", "replace"))


if __name__ == "__main__":
    main()
```

```output
b'n3xt{w0w_y0u_c0mb1n3d_tw0_d1ff3r3nt_rsa_4tt4cks!}'

*** ASTOUNDING WORK, ANALYST! ***
You are truly one of a kind. Protocol fully compromised.
```

Flag:n3xt{w0w_y0u_c0mb1n3d_tw0_d1ff3r3nt_rsa_4tt4cks!}
