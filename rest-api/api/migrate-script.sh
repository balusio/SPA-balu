#!/bin/bash
php artisan migrate && php artisan db:seed

service apache2 restart

#Extra line added in the script to run all command line arguments
tail -f /dev/null

