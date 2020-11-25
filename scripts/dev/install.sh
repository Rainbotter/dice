#!/bin/bash

if [ -z "$1" ]; then
  docker run --user "$(id -u "$(whoami)")" -v "$PWD"/../..:/app -w /app -it node npm install
else
  docker run --user "$(id -u "$(whoami)")" -v "$PWD"/../..:/app -w /app -it node "$@"
fi
