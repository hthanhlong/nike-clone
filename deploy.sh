#! /bin/bash

# stop the container
docker stop nike_clone

# remove the container
docker rm nike_clone

# remove the image
docker rmi nike_clone

# build the image
docker build -t nike_clone .

# run the container
docker run -d --name nike_clone -p 8080:80 nike_clone
