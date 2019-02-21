FROM php:7.2-apache
COPY ./api /var/www/html/api/
COPY index.php /var/www/html/test/
WORKDIR /var/www/html/api/
RUN docker-php-ext-install pdo_mysql
RUN apt-get update && apt-get install -y \
    git \
    vim \
    zip \
    unzip

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN chmod +x ./wait-for-mysql.sh
RUN php installer
RUN php composer.phar install
RUN a2enmod rewrite
RUN service apache2 restart 
RUN chmod -R 777 storage
EXPOSE 80