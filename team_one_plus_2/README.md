# README #

## README FILE AS OF 20 OCTOBER 2022

# INSTALLATION
1. To install:
~~~
npm install
~~~

2. Check and fix the possible errors. (Note: Ignore one of the errors that say denial of service in threejs, unless you know to fix it.)

# OPTIONAL: TO RUN UI ONLY
1. Run UI only.
~~~
npm run serve
~~~

2. To open the UI in the webpage, go to the link specified in the terminal shown. Example:
~~~
http://localhost:8080/
~~~

# LAUNCH THE SYSTEM
0. *NOTE!* Before launching, please set the correct IP for the rosbridge connection. It is currently located inside App.vue.

1. Launch server.py and UI (please check the content of the script!):
~~~
. web_interface/scripts/system_startup.sh
~~~

2. To open the UI in the webpage, go to the link specified in the terminal shown.
~~~
http://localhost:8080/
~~~

# LAUNCH THE PROGRAM
1.  Inside the webpage. To launch the program, click TURN ON at the homepage. It will run the program_on.sh script. (please check the content
of the script! Especially inside program_on.sh and restart_moveit.sh, for the robot and moveit, they are currently set to only launch the tree_pruning's jog_launch for melfa_rv7frl. Remember to modify them to suit your use for launching different robots at a later date.)


## KNOWN PROBLEMS (HAVEN'T SOLVED) AS OF 21 OCTOBER 2022
1. server.py made the whole webpage laggy.
2. The ros3d visualisation made the whole webpage much more laggy.
3. The ros3d visualisation doesn't show the whole robot. (Only the black block)
4. Not sure about the contents previously written by another colleague inside main.js.