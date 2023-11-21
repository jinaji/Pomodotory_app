FROM node:18-alpine

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
# RUN npm i -g @nestjs/cli && npm i --save @nestjs/typeorm typeorm mysql2

CMD ["npm", "run", "start:dev"]

EXPOSE 4000