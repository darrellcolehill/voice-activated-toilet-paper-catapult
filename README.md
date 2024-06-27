# voice-activated-toilet-paper-catapult
DISCLAMER: This repository is intended for personal use so all necessary files may NOT be included in this repository

# Demo Video Link
https://www.youtube.com/watch?v=5GQfHLDG2k8

# Things you need
1. Amazon Alexa
2. Raspberry Pi (with internet accessibility)
3. Arduino Uno
4. Servo 

# Step 1
Upload the code to control the release mechanism to the Arduino

# Step 2
SSH into your Raspberry Pi 

# Step 3
Download ngrok by entering the following command: sudo wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip

# Step 4
unzip ngrok, then run it by entering the following command: ./ngrok http 3000

# Step 5
Copy the address given by ngrok and paste it into the ENDPOINT variable in the AWS application titled "alexapoophelper1"

# Step 6
SSH into the Raspberry Pi a second time and cd into NodetoPy

# Step 7 
Run the node application by entering the following command: node app

# Explanation
1. AWS code (index.js) sends a GET request to the URL provided by ngrok which tunnels the request to port 3000 (which is where the node server is runnning on the RPI).
2. The node server runs a python script (pySerialTest.py) that sends serial data to the arduino
3. Arduino code turns a servo when serial data is sent from RPI

Alexa > Skill function > ngrok URL > node server (port 3000 on RPI) > python script > arduino 


