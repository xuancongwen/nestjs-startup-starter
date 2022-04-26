FROM node:16.14.2-alpine AS local
ARG NODE_ENV=local
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install

COPY . /usr/src/app

CMD ["yarn", "run", "start:debug"]

FROM node:16.14.2-alpine AS staging
ARG NODE_ENV=staging
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install

COPY . /usr/src/app
RUN yarn build

CMD ["yarn", "run", "start"]

FROM node:16.14.2-alpine AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install

COPY . /usr/src/app
RUN yarn build --prod

CMD ["yarn", "run", "start:prod"]
