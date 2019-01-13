#!/bin/zsh

echo "Uninstalling current service... "
if [[ -a /etc/systemd/system/discovery.service ]]; then
	echo -e "Service found, removing...  \c"
	systemctl stop discovery.service  &> /dev/null
	systemctl disable discovery.service &> /dev/null
	echo "Removed!"
fi


echo -e "Installing new service... \c"
cp ./discovery-service/discovery.service /etc/systemd/sytem
systemctl enable discovery.service &> /dev/null
systemctl start discovery.service &> /dev/null
echo "Installed!"

# journalctl -u timestamp
