# alexa-stop-the-pigeon
Alexa Skill + IoT + RaspberryPI  = No more pesky pigeons

Have you ever wanted to end the pigeon plague? If you do, this is the place!

In order to start, we are goind to need the following:

- Raspberry PI 3 (Raspbian Lite)
- Some basic Breadboard kit
- An OWL PROP [https://www.amazon.co.uk/gp/product/B003EGNTPU/ref=oh_aui_search_detailpage?ie=UTF8&th=1]
- Some SERVOS + Pan/Til kit (So we can move the owl head around)
- Speakers
- Time. Quite a lot of it... 
- Motion sensors for future auto scare

The Idea:

You Talk to alexa and that triggers actions that get dispatched to the Thing (Pi). Those actions can be one or combinations of:
Light, sound, head movement. That will scare pigeons and they will stop coming, Hopefully... 

TBD


.
.
.

Resources:

 - Playing a sound in the Raspberry PI out from 3.5mm jack: https://www.raspberrypi-spy.co.uk/2013/06/raspberry-pi-command-line-audio/
 - GPIO Control via node: https://www.npmjs.com/package/rpi-gpio / https://github.com/fivdi/pigpio
 - ZSH / Oh My ZSH with PI: https://escapologybb.com/oh-my-zsh/
 - Making RPI easily discoverable when connected to any network (I've build scripts to do it, silly me): https://www.howtogeek.com/167190/how-and-why-to-assign-the-.local-domain-to-your-raspberry-pi/
 - SSH Passwordless into your pi: https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md
 - Setup WIFI on Raspbian Lite:  
   - https://thepihut.com/blogs/raspberry-pi-tutorials/83502916-how-to-setup-wifi-on-raspbian-jessie-lite
   - https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md
 - Angular App
   - https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners
 - NodeJS + Express
   - https://brianflove.com/2017/03/22/express-cors-typescript/
   - https://www.npmjs.com/package/cors
   - https://www.raspberrypi.org/forums/viewtopic.php?t=197513
   - https://github.com/adafruit/Adafruit_Python_PCA9685/blob/master/examples/simpletest.py
   - https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2
   - https://github.com/101100/pca9685/blob/master/README.md
   - https://github.com/nodejs/node-gyp
   - https://github.com/nwjs/nw-gyp

AWS:
 - Alexa Skills intro https://developer.amazon.com/docs/smarthome/understand-the-smart-home-skill-api.html
 - Basic IoT/Alexa Skill:       
   - https://developer.amazon.com/blogs/post/Tx3828JHC7O9GZ9/Using-Alexa-Skills-Kit-and-AWS-IoT-to-Voice-Control-Connected-Devices
   -  https://medium.com/coinmonks/alexa-custom-skill-with-aws-lambda-to-control-iot-device-68f37beac3fb
- sample projects in Python https://github.com/alexa/skill-sample-python-smarthome-iot/

 Misc: 
 - Demoing Servo sg90 control with joystick: https://www.youtube.com/watch?v=4A7tJ0QH4L4
 - Audio Special Effects: https://www.freespecialeffects.co.uk/
 - I know we all hate it, but they have cool insights from time to time: https://www.w3schools.com/nodejs/nodejs_raspberrypi_gpio_intro.asp
  
TBC:
  - Open ports in router to enable forwarding to raspi. Make sure the ip in the network is static for now.
  - 