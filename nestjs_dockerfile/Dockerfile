# Build 스테이지
FROM node:18-alpine as builder

WORKDIR /var/back

COPY package*.json ./
RUN npm ci

COPY tsconfig*.json ./
COPY . .

RUN npm run build

# 실행 스테이지
FROM node:18-alpine

WORKDIR /var/back

COPY --from=builder /var/back/dist ./dist
COPY package*.json ./

RUN npm install --production

EXPOSE 4000

CMD ["npm", "run", "start:prod"]
