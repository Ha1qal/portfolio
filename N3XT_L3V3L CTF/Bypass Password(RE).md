![!\[alt text\](image.png)](<screenshots/bypass password.png>)

Step 1:analyze the file

I open in Ghidra but it seems there's no lead so I try to analyze using DIE and the binary file is compiled in python program

Step 2:extract

```powershell
.\pyinstxtractor.py .\gatekeeper
pycdas chall.pyc
```

Step 3:analyze the code

Further analyze it seems that the password is C0DE_1S_AW3S0ME so I run the binary and input the password and got the flag

```bash
✦ ❯ ./gatekeeper
==============================
      GATEKEEPER v1.0
==============================
[] Enter password to open the gate: C0DE_1S_AW3S0ME
[*] Verifying Stage 1...
[+] Stage 1 passed!
[*] Verifying Stage 2 (Anti-Debugging)...
[+] Anti-Debugging check passed.
[*] Verifying static password parts...
[+] All password checks passed!
[*] Verifying Stage 3 (Cryptography)...
[+] Decryption complete.

========================================
      THE GATE IS OPEN! FLAG ACQUIRED!
========================================

Your Flag is: n3xt{C0DE_1S_CHALLE^GE}
```
Flag:n3xt{C0DE_1S_CHALLE^GE}
