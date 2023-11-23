FROM node:18-alpine

WORKDIR /var/back

COPY package*.json .
RUN npm install

COPY tsconfig.json .

EXPOSE 4000

CMD ["npm", "run", "start:dev"]