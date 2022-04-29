INSTALLATION

To install this package to a new Raspberry Pi device ::

I. Octopi image installation to SD card
==========================================

1. Follow the instructions on https://octoprint.org/download/

II. Customize base image
==========================================

1. To configure for your network (if you don't assign it correctly during imaging)

wpa_passphrase [ssid] [plaintextphrase] > temp.txt

sudo vi /etc/wpa_supplicant/wpa_supplicant.conf temp.txt

Copy the information from temp.txt into wpa_supplicant.conf

III. Install Kiosk, AdminWeb, Livestream Services
===========================================

Copy the /home/pi/adminweb folder to the same location on the device

chmod a+x /home/pi/adminweb/bin/adminweb

Copy the /home/pi/kiosk folder to the same location on the device

chmod a+x /home/pi/kiosk/bin/kiosk

Copy the /home/pi/livestream folder to the same location on the device

chmod a+x /home/pi/livestream/bin/pi

Copy the /etc/systemd/system/kiosk.service file to the same location on the device

Copy the /etc/systemd/system/adminweb.service file to the same location on the device

Copy the /etc/systemd/system/livestream.service file to the same location on the de

Follow the instructions here to install docker and other components for command-line livestreaming - https://github.com/jneilliii/OctoPrint-YouTubeLive/blob/master/docker_instructions.md

sudo systemctl enable kiosk

sudo systemctl enable adminweb

sudo systemctl enable livestream

IV. Configure Octopi
=============================

1. Load files 

2. Load the custom "continuousprint" plugin

V. Install Kiosk web files
=============================

Copy Kiosk web files to /home/pi/kiosk/wwroot (may need to make this folder)