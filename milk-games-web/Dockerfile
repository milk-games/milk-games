FROM node:latest

WORKDIR /var/www/react

### if u dont wanna map the volume
# COPY package*.json ./
# RUN npm install
# COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL ${REACT_APP_API_URL}

ENTRYPOINT [ "npm", "start" ]