FROM node:14.15

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile --non-interactive

CMD ["yarn", "start"]