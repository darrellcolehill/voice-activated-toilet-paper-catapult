# alexa-toilet-paper-catapult
Exactly what it sounds like, I made a voice controlled catapult that launches toilet paper.
DISCLAMER: This repository is intended for personal use so all necessary files are not yet included in this repository

# Things you need (part list for catapult coming soon)
1. Amazon Alexa
2. Raspberry Pi (with internet accessibility)
3. Arduino Uno
4. Servo 

# Step 1
SSH into your Raspberry Pi 

# Step 2
Download ngrok by entering the following command: sudo wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip

# Step 3
unzip ngrok, then run it by entering the following command: ./ngrok http 3000

# Step 4
Copy the address given by ngrok and enter it into the ENDPOINT variable in the AWS application titled "alexapoophelper1"

# Step 5
SSH into the Raspberry Pi a second time and cd into NodetoPy

# Step 6 
Run the node application by entering the following command: node app


