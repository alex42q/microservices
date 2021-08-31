FROM node:latest

RUN mkdir -p /usr/src/UserServices

WORKDIR /usr/src/UserServices

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]