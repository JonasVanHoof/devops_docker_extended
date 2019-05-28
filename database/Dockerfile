# used base image
FROM mysql

WORKDIR /docker-entrypoint-initdb.d/
# login for sql database
ENV MYSQL_RANDOM_ROOT_PASSWORD=TRUE

# copy test_db
COPY test_db/* ./

# start mysql server
RUN ["/usr/local/bin/docker-entrypoint.sh"]