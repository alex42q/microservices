FROM node:10.16-alpine

RUN mkdir -p /usr/src/UserServices

WORKDIR /usr/src/UserServices

COPY . .

EXPOSE 5001

CMD ["npm", "start"]