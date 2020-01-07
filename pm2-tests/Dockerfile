FROM node:latest

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm i

EXPOSE 3000

CMD [ "node", "app.js" ]