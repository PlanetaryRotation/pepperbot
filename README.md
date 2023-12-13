### What is OpenPepper?

OpenPepper is the public repository that holds all my code for the PepperBot [Discord](https://discord.com) bot.
This bot can be found on my discord server, [DEFENDERS OF CHRISTOS](https://discord.gg/xNYtyeQaQe).
If you for some reason stumble upon this (damn bro you really went lookin), the server is for a guild for the [Roblox](https://roblox.com) game [Deepwoken](https://deepwoken.fandom.com)

PepperBot is really just an experiment, there is no end goal in mind. If you give me a good suggestion, I'll probably add it.
Please test the shit outta my bot, I want to know if there are any bugs/crashes that I don't know about.

### TODO:

finish cbrowser (may possibly remove from gitignore soon)

clean up p/vileimagery, its horrendous

### VERSION HISTORY:

**_Note:_** _versions before this were not uploaded to the repo, this is not the first version._

    1.14 - added announcement system, bug fixes

---

    1.13 - new blacklist feature (for my own amusement,) random sound feature, tons of bug fixes
    1.13.1 - fixed longstanding issue with readme.md where discord server link was invalid

---

    1.12 - changed most discord actions to be handled by 1 script. this should cut down on errors and allow you to actually use the bot in other servers (i think)
    1.12.1 - direct messages are now redirected to main channel
    1.12.2 - fixed being able to crash bot by creating messages over 2k characters

---

    1.11 - added PEPPERBOT VOICE CHAT CAPABILITY
    1.11.1 - added ability to upload custom soundboard files

---

    1.10 - changed all requires to imports

---

    1.9 - added p/eulogy and the capability for command arguments
    1.9.1 - added command argument usage for sendlog (mobile support)

---

    1.8 - reorganized files some more, moved all events from index.js to seperate scripts in events folder,
    1.8.1 - cleaned up p/vileimagery a bit
    1.8.2 - fixed guildMemberAdd event error

---

    1.7 - major file reorganization, changed some dumb stuff like images and logs being in src
    1.7.1 - pushed README.md

---

    1.6 - added a new logging system that is much more optimized, descriptive, and easier to manage than the previous one
    1.6.1 - updated logging system to not spam my terminal with every command executed

---

    1.5 - added logging to recieved direct messages
    1.5.1 - removed line of code preventing execution of commands in direct messages

---

    1.4 - added p/guildmembers and p/addguildmember
    1.4.1 - added automatic guild member addition to guildmembers.log

---

    1.3 - added p/vileimagery (random vile image generator)
    1.3.1 - changed .gitignore to include random file folders
    1.3.2 - removed p/vileimagery whitelist
    1.3.3 - added ability to specify file names on p/vileimagery

---

    1.2 - added p/dmuser command
    1.2.1 - fixed recursive p/says causing rate limiting
    1.2.2 - fixed crashes relating to attempting to dm users outside of the current guild
    1.2.3 - added a ping to the sender to p/dmuser
    1.2.4 - fixed 1.2.3's formatting issue

---

    1.1 - added p/pepper command (random pepper generator)
    1.1.1 - updated p/pepper description on commands list
