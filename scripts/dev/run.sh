#!/bin/bash

docker run --user "$(id -u "$(whoami)")" -v $PWD/../..:/app -w /app -p 4200:4200 -it node npm start