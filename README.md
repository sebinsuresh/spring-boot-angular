## About

Employee manager project made using Angular + Spring Boot + PostgeSQL.
Following this tutorial: https://www.youtube.com/watch?v=Gx4iBLKLVHk

## Backend

Using:
- Maven
- Spring Boot 3.2.1
- Java 17
  - `sdk use java 17.0.9-amzn`
- Dependencies
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver

To run the backend services:

```sh
cd backend

# Bring up Postgres:
docker compose up -d db

# Enter Postgres CLI & Create DB:
docker exec -it backend-db-1 psql -U postgres

# In psql terminal:
CREATE DATABASE employeemanager;
\q
```

After this you can start up the backend API:
```sh
# Use SDKMan and set the java version
sdk env

# Start up spring boot application
./mvnw spring-boot:run
```

## Frontend

Using:
- Angular (v?)
- TypeScript (v?)

Open up another terminal, and start up the frontend application using:
```sh
cd frontend
ng serve
```
