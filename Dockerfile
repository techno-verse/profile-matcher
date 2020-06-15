FROM node:10
MAINTAINER shreyas7p@gmail.com

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY ./src ./src
COPY ./.nycrc ./
COPY ./tsconfig.json ./

RUN npm install 


CMD [ "npm", "start" ]
