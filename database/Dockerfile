# used base image
FROM mysql

# login for sql database
ENV MYSQL_RANDOM_ROOT_PASSWORD=TRUE

# copy test_db
COPY test_db/* /docker-entrypoint-initdb.d/

# start mysql server
RUN ["/usr/local/bin/docker-entrypoint.sh"]
