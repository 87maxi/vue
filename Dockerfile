FROM node:alpine3.10

RUN apk add --update npm
RUN npm i -g @vue/cli-service-global

RUN mkdir app

WORKDIR app


COPY . . 

ENTRYPOINT [ "npm", "run", "serve" ]

