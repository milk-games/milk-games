#! /bin/bash

docker-compose build

docker-compose up -d mysql
docker-compose up -d milk-games-web milk-games-api nginx