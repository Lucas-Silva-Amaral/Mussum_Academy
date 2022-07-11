FROM node:16.13.1-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN npm i -g yarn --force

RUN yarn



COPY . .

CMD "yarn" "start:dev"


FROM node:14.17.1 As production

WORKDIR /usr/src/app

COPY package*.json ./

CMD apt install yarn

RUN yarn

COPY . .

RUN yarn build
