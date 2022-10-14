#!/bin/zsh

IMAGE=v3-stub-service-image
CONTAINER=v3-stub-service-container

ECHO "stoping $CONTAINER"
docker stop $CONTAINER
ECHO "removing $CONTAINER"
docker rm $CONTAINER

ECHO "creating image $IMAGE"
docker build -t $IMAGE .

docker run -p 8099:3000 --name $CONTAINER -d $IMAGE
ECHO "started $CONTAINER"
