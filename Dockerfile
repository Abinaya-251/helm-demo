FROM node:16.16.0

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm ci 
COPY . .
EXPOSE 49162
CMD [ "node", "server.js" ]
