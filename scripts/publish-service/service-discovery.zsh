#!/bin/zsh
cd $(dirname $0)
FILE_NAME=ipconfig.json
IP_URL=ifconfig.me/all.json
AWS_TOPIC=arn:aws:sns:eu-west-1:000050557359:service-discovery

curl -s ${IP_URL} > ${FILE_NAME}

PAYLOAD=`node service-discovery ./${FILE_NAME} owl-head 3000`

echo `aws sns publish --topic-arn "${AWS_TOPIC}"  --message "${PAYLOAD}"`