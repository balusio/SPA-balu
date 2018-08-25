#!/bin/bash
# wait-for-mysql.sh

# set -e

# host="$1"
# shift
# cmd="$@"

# until MYSQLPASSWORD=$MYSQL_ROOT_PASSWORD mysql -h "$host" -U "mysql" -c '\q'; do
#   >&2 echo "mysql is unavailable - sleeping"
#   sleep 1
# done

# >&2 echo "mysql is up - executing command"
# exec $cmd
while !(mysqladmin ping)
do
   sleep 3
   echo "waiting for mysql ..."
done
echo "starting the main script"