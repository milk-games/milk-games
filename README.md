# Milk Games
***

### Contents
1. [Setting up the development environment](#setting-up-the-development-environment)
    1. [Requirements](#requirements)
    1. [Environment Variables](#environment-variables)
    1. [Running Locally](#running-locally)
    1. [Running with Docker](#running-with-docker)
***
### Setting up the development environment


##### Requirements

1. [Docker](https://www.docker.com/)
2. [Node.js](https://nodejs.org/en)
3. [Maven](https://maven.apache.org/download.cgi)
4. Java

Useful but not necessary:
1. [MySQL Workbench](https://www.mysql.com/products/workbench/)
2. Discord account for auth

##### Environment Variables

The `.env.development` file contains a blank .env file which should be copied twice to create a `.env` and `.env.local` file.

`MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_ROOT_PASSWORD` can be anything you wish and will be used to create the credentials for your local mysql server through docker.

`OAUTH2_ENABLED` should be set to `false` if you don't wish for any auth.  This should really be set if you don't have a discord client id or client secret.

##### Running Locally

Running locally is recommended for API development as changes will be updated instantly through spring devtools

If using VSCode these attributes should be added to the launch configuration
```json            
{
    ...
    "envFile": "${workspaceFolder}/.env.local",
    "env": {   
        "API_URL": "http://${API_HOSTNAME}:${API_PORT_FROM}",
        "WEB_URL": "http://${WEB_HOSTNAME}:${WEB_PORT_FROM}"
    }  
} 
```

###### Steps

1. Run `docker compose up mysql` in terminal
2. Run `MilkGamesApplication.java` with the launch configuration through vscode
3. Initialise web app with following commands
```
cd milk-games-web
npm install
npm start
```

##### Running with Docker

The web src is shared with docker container so changes to web should update immediately

###### Steps

1. `mvn clean package` in terminal
2. `docker compose build`
3. `docker compose up -d mysql`
4. `docker compose up`
