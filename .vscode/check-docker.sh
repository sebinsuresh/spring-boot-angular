#!/bin/bash

# check if docker is running:
if ! docker info >/dev/null 2>&1; then
  echo "Docker is not running. Please start docker and try again."
  exit 1
fi
