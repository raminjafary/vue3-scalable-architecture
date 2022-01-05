#!/bin/bash

DEPLOY_ENV=${1:-$"stg"}

RED='\033[0;31m'
GREEN='\033[0;32m'

if [ $DEPLOY_ENV == "dev" ]
then
	sudo docker build -t front-dev -f Dockerfile.dev . --network=host
fi

if [ $DEPLOY_ENV == "stg" ]
then
	sudo docker build -t front-stg -f Dockerfile.staging . --network=host
fi

if [ $DEPLOY_ENV == "prod" ]
then
    sudo docker build -t front-prod -f Dockerfile.prod . --network=host
fi

if [ $? -eq 0 ];
then
    echo -e "\n${GREEN}The container is built successfully..!\n"
    # Running via this command!
    #   sudo docker run -d -p 5000:80 --name front-stg front-stg
else
    echo -e "\n${RED}FAILED..!\n"
fi


