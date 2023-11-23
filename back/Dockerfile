FROM node:18-alpine

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./

EXPOSE 4000

CMD ["npm", "run", "start:dev"]