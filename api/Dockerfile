FROM node:alpine3.10

RUN apk add --update npm

RUN mkdir /data
COPY db.json /data

RUN npm install -g json-server

WORKDIR /data