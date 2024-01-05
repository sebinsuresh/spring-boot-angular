FROM postgres:13.9

# Note - this happens only on a new database and not each startup so will need to run manually on existing database
# See the "Initialization Scripts" section on https://hub.docker.com/_/postgres for details
COPY ./init-db.sh /docker-entrypoint-initdb.d
