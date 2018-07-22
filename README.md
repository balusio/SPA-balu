# js-api
js api


# REST-API
this rest-api is builded on lumen framework and Dockerfile php image,
go to rest-api/folder

build the image :
docker build . -t rest-api 
docker run -d -p 80:80 -v ./rest-api/api:/var/ww
w/html/api --name rest-api-cont rest-api