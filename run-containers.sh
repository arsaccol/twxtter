#!/bin/sh

#rm -rf sql-data && 
docker-compose down &&
docker-compose up -d --build
