# Docker Tutorial

## Link to Tutorial
[Fireship Video](http://www.google.com)

## Docker Files

- Dockerfile
  - defines how to build a docker image
- .dockerignore
  - when building a docker images, ignore these files
- docker-compose-yaml
  - define how to run multiple docker containers


## Docker Commands

```bash
# list all running docker processes
docker ps

# list all docker images
docker images

# build a docker image with specified username, reponame and tag
docker build -t [username]/[reponame]:[tag] .
```

## Dockerfile Commands
defined how to build our image
```Dockerfile
# specify operating environment to run in
FROM node:16.9.0

# create a directory in the container to run the process in
WORKDIR /app

# specify source files to copy to image
COPY package*.json ./

# run a command in the image build, with a shell
RUN npm install

# defined environment variables
ENV PORT=8080

# forward a port from the container
EXPOSE 8080

# run a command without a shell
CMD [ "npm", "start" ]

```

## docker-compose.yaml
define how to run multiple containers
```yaml
version: '3'
services:
  # our web app
  # on linking port 5000 to 8080
  web:
    build: .
    ports:
      - "5000:8080"
  # run mysql image
  # with defined environment variables
  db:
    image: "mysql"
    environment:
      MYSQL_ROOT_PASSWORD: "root"
    volumes: db-data:/foo

volumes:
  db-data:
```