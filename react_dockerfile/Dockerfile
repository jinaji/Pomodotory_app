# Build 스테이지
FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 실행 스테이지
FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/build /app

RUN npm install -g http-server

CMD ["http-server", "-p", "3000"]