FROM node:18-alpine

COPY package*.json ./
RUN npm install react-scripts@5.0.1 --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]