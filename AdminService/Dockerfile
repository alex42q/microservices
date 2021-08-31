FROM node:latest

RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5003

CMD ["npm", "start"]