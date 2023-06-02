FROM node:latest

WORKDIR /var/www/react

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL ${REACT_APP_API_URL}

RUN npm install -g serve

ENTRYPOINT [ "serve",  "-s", "build" ]