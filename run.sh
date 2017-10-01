#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE:-${(%):-%N}}")"; pwd)"
FILE=$SCRIPT_DIR/docker-compose.yml
USER_ID=$(id -u $USER)
NPM_REGISTORY=${NPM_REGISTORY:-http://192.168.254.6:4873}

mkdir $SCRIPT_DIR/build/public -p
WEBAPP_USER=$USER_ID NPM_REGISTORY=$NPM_REGISTORY docker-compose -f $FILE -p webapp $@
