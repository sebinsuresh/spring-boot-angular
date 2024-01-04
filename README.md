## About

Employee manager project made using Angular + Spring Boot + PostgeSQL.
Following this tutorial: https://www.youtube.com/watch?v=Gx4iBLKLVHk

Using:
- Maven
- Spring Boot 3.2.1
- Java 17
  - `sdk use java 17.0.9-amzn`
- Dependencies
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver

Bring up Postgres:
```sh
docker compose up -d db
```

Enter Postgres CLI & Create DB:
```sh
docker exec -it angular-spring-boot-tut-db-1 psql -U postgres

# once you're in:
CREATE DATABASE employeemanager;
```
