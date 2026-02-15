![!\[alt text\](image.png)](screenshots/inthedark.png)

```bash
strings -t x panel

 4008 freedom
   4010 Enter agent code:
   4022 Your code is wrong!
   4038 Welcome to Majlis control panel!
   4059 [1] Create a new bomb!
   4070 [2] Defuse all bombs! (admin only)
   4093 [3] Exit
   409c Enter option:
   40b0 OK! Created new bomb! Everything for Liberty!
   40de Enter secret key:
   40f0 Key is wrong!
   4100 OK! We defuse all bombs! Everything for Humanity!
   4132 n3xt{
   4138 _1s_0ur_boss_and_
   414a _1s_0ur_dest1nat1on!}
   4160 Sorry, You are not admin!
   417a Bye bye...
   4185 You choose wrong option!
   41a0 basic_string: construction from null is not valid
   41d8 cannot create std::vector larger than max_size()
   4210 zohrab_13
   421a murad_00
   4223 vusal_41
   422c parviz_777
   4237 rufat_2
```
Run the program
```bash
✦ ❯ ./panel
Enter agent code:parviz_777
Welcome to Majlis control panel!
[1] Create a new bomb!
[2] Defuse all bombs! (admin only)
[3] Exit
Enter option:2
Enter secret key:freedom
OK! We defuse all bombs! Everything for Humanity!

n3xt{parviz_777_1s_0ur_boss_and_freedom_1s_0ur_dest1nat1on!}
```
Flag:n3xt{parviz_777_1s_0ur_boss_and_freedom_1s_0ur_dest1nat1on!}
