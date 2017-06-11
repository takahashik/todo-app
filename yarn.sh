#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE:-${(%):-%N}}")"; pwd)"
FILE=$SCRIPT_DIR/docker-compose.yml
USER_ID=$(id -u $USER)

WEBAPP_USER=$USER_ID docker-compose -f $FILE run --rm --no-deps --entrypoint yarn webapp $@
