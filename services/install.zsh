#!/bin/zsh

if [[ -a /etc/systemd/discovery.service ]]; then
	systemctl stop discovery.service
	systemctl disable discovery.service
fi


cp ./discovery-service/discovery.service /etc/systemd/system
systemctl enable discovery.service
systemctl start discovery.service

# journalctl -u timestamp
