FROM node:latest

RUN mkdir -p /usr/src/HomesService

WORKDIR /usr/src/HomesService

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5004

CMD ["npm", "start"]