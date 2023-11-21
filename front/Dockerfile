FROM node:18-alpine

RUN apk add --no-cache git

COPY ./tools/start_react.sh /start_react.sh

RUN chmod +x /start_react.sh

CMD ["/bin/sh", "/start_react.sh"]

EXPOSE 3000