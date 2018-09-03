# fullstack webapp development
js api


# REST-API
this rest-api is builded on lumen framework inside a Dockerfile php image,
go to "rest-api"folder

build the service:

docker-compose up -d

Important: Before start the docker-compose service check the 80 port is available , the web API service use this port, feel free to change it on the rest-api/Dockerfile on line 19 : "EXPOSE 80" for the port of your need.

Once the PHP container is running  you must alterate the db making the migrations and seeding it with dummy data :
docker exec -d [container id or name you select] bash 'php artisan migrate && php artisan db:seed'

# Front End
The front end is builded with Webpack , the libraries used :
Axios
Draggable from Shopify

To build the development mode use :

npm install (for install dependencies)
npm run start (for development mode and webpack devserver run)
