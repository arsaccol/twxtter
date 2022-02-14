#!/bin/bash

source vars.env
echo $MYSQL_ROOT_PASSWORD
mysql -h localhost -P 3306 --protocol=tcp -u root -p"$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE
