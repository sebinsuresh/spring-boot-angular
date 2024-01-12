## About

Employee manager project made using Angular + Spring Boot + PostgreSQL.
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
# Bring up Postgres:
docker compose up -d db
```

After this you can start up the backend API:
```sh
cd backend

# Use SDKMan and set the java version
sdk env

# Start up spring boot application
./mvnw spring-boot:run
```

To start up the application with debugger port 5005 open, use:
```sh
mvn spring-boot:run \
    -Dspring-boot.run.jvmArguments="-Xdebug \
          -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
```

## Frontend

Using:
- Angular v13
- TypeScript v4.5

Open up another terminal, and start up the frontend application using:
```sh
cd frontend
# Run `npm install` if not already
npm start
```

## Running in Docker

From the root of the project, run:
```sh
docker compose up -d
```

Visit http://localhost:4200 in browser

You should be able to access:
- DB: `localhost:5432`
- Backend API: `localhost:8080`
- Frontend: `localhost:4200`

To bring everything down:
```sh
docker compose down
# Or to remove DB data as well:
docker compose down --volumes
```

If this fails on Windows machines, the likely reason is that you have CRLF line endings in one of the shell scripts / mvnw files.

To fix in the short term, use:
```sh
dos2unix <path-to-file>
# e.g.:
dos2unix backend/mvnw
```

You can have git disable the automatic conversion of LF to CRLF files by running:
```sh
git config core.autocrlf false
```
You may also want to reset the line ending changes in all files that show up now in git status.

### Adding data

Use the postman collection to create data

## TODOs

- Adding tests for API
- Adding tests for UI
- Validators for API
- API spec generation
- UI: Better organization of components
- UI: ??
