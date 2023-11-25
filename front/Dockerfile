FROM node:18-alpine

WORKDIR /var/front

COPY package*.json .
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]