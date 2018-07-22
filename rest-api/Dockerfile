FROM php:7.2-apache
COPY ./api /var/www/html/api/
COPY index.php /var/www/html/test/
WORKDIR /var/www/html/api/
RUN docker-php-ext-install pdo_mysql
RUN apt-get update && apt-get install -y \
    git \
    vim \
    zip \
    unzip \
    mysql-server \
    mysql-client

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

RUN php installer  \
    php composer.phar install  \
    a2enmod rewrite  \
    service mysql start  \
    service apache2 restart 
EXPOSE 3306 80 443