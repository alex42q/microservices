FROM node:latest

RUN mkdir -p /usr/src/AuthService

WORKDIR /usr/src/AuthService

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]