#!/bin/bash

# Check if the environment parameter is provided
if [ -z "$1" ]; then
  echo "Usage: $0 [env]"
  exit 1
fi

env=$1

# Stop the current running services for the environment
docker compose stop $env

# Build the services for the environment without using cache
docker compose build $env --no-cache

# Start the services for the environment
docker compose up $env
