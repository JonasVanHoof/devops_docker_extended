# use node image
FROM node:current-alpine

WORKDIR /usr/src/app

# copy package list
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]