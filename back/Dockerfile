FROM node:18-alpine

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./

CMD ["npm", "run", "start:dev"]

EXPOSE 4000