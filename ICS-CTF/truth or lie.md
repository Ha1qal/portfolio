This is cypto challenge that we need to guess the question given by the server so the solution is a script I create below

```python
from pwn import remote
import itertools
import ast

def solve_subset_sum(r, target):
    n = len(r)
    half = n // 2
    left = r[:half]
    right = r[half:]

    left_map = {}
    for bits in itertools.product([0, 1], repeat=len(left)):
        s = sum(x*b for x, b in zip(left, bits))
        left_map[s] = bits

    for bits in itertools.product([0, 1], repeat=len(right)):
        s = sum(x*b for x, b in zip(right, bits))
        complement = target - s
        if complement in left_map:
            return list(left_map[complement]) + list(bits)
    return None

def main():
    io = remote('152.42.220.146', 18303)

    # Read until "Game session:" line
    while True:
        line = io.recvline(timeout=5)
        if not line:
            print("Connection closed unexpectedly.")
            return
        text = line.decode()
        print(text.strip())
        if "Game session:" in text:
            session_line = text[text.find("Game session:") + len("Game session:"):].strip()
            break

    # Read more lines until we find closing '}' of the dict
    session_str = session_line
    while '}' not in session_str:
        line = io.recvline(timeout=5)
        if not line:
            print("Connection closed unexpectedly while reading session dict.")
            return
        session_str += line.decode().strip()

    # Now session_str contains the full dictionary string like:
    # {'r': [1146115759444890, 2096138266323534, ...], 'sum': 123456789}
    # Use ast.literal_eval for safe parsing
    try:
        session_dict = ast.literal_eval(session_str)
    except Exception as e:
        print("Failed to parse session dictionary:", e)
        return

    r = session_dict.get('r')
    target = session_dict.get('sum')

    print(f"Parsed r (length {len(r)}) and sum = {target}")

    ans = solve_subset_sum(r, target)
    if ans is None:
        print("No solution found for subset sum.")
        return

    print(f"Solved ans: {ans}")

    n = len(r)
    for i in range(n):
        # Read statement line
        statement_line = io.recvline(timeout=5).decode().strip()
        print(statement_line)

        # Prompt line (guess)
        io.recvuntil("guess if I'm lying (yes/no):")
        guess = "yes\n" if ans[i] == 1 else "no\n"
        io.send(guess)
        print(f"Sent guess: {guess.strip()}")

        # Response line (Correct/Wrong)
        response = io.recvline(timeout=5).decode().strip()
        print(response)

    # Read final output (flag or result)
    final_output = io.recvall(timeout=5).decode()
    print(final_output)

if __name__ == "__main__":
    main()

```
