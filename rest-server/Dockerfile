FROM node:8

WORKDIR /usr/src/app

COPY ./containerFiles/package*.json ./

RUN npm install

# Bundle app source
COPY ./containerFiles .

EXPOSE 8080
CMD [ "npm", "start" ]