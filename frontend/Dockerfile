# From https://levioconsulting.com/insights/how-to-dockerize-an-angular-application-with-nginx/

FROM node:16 as build
WORKDIR /usr/local/app
COPY /package*.json /usr/local/app/
RUN npm install
COPY ./ /usr/local/app/
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/employeemanagerapp /usr/share/nginx/html
EXPOSE 80
