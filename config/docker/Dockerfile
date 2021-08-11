FROM node:16

WORKDIR /usr/crafty

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "node", "./dist/server.js" ]