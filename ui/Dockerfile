FROM node:latest as builder

WORKDIR /tmp/app

COPY . .
RUN yarn install --frozen-lockfile --non-interactive
RUN yarn build

FROM node:14-alpine

WORKDIR /app
COPY --from=builder /tmp/app/build .

RUN yarn global add serve
ENV PATH="$(yarn global bin):$PATH"
ENV PORT=8080
CMD ["serve", "-s", "."]