# js-api
js api


# REST-API
this rest-api is builded on lumen framework and Dockerfile php image,
go to rest-api/folder

build the service:

docker-compose up -d

once the PHP container is running you must alterate the db to add and make the migration :
docker exec -d rest-api_rest_1 /bin/bash php artisan migrate && php artisan db:seed