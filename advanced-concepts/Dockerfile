FROM node:latest

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm i

RUN npm i -g --save-dev nodemon

EXPOSE 8080

CMD [ "node", "app.js" ]