FROM node:latest

RUN mkdir -p /usr/src/CategoriesService

WORKDIR /usr/src/CategoriesService

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD ["npm", "start"]