FROM node:18-alpine

COPY package*.json ./
RUN npm install -g npm@latest

COPY tsconfig.json ./

EXPOSE 3000

CMD ["npm", "run", "start"]