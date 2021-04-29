FROM node:14
WORKDIR /usr/src/web
COPY ./package.json .
RUN  yarn install --only=prod