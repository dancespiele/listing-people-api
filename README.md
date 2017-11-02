# Listing People Api
This is a backend example using [pyrite server framework](https://github.com/pyrite-framework/pyrite-server).

## Requirements

* MongoDB
* Node
* Typescript

## Download

`git clone git@github.com:dancespiele/listing-people-api.git`

## Install

Enter to the folder and execute:

```
    npm install -g typescript
    npm install -g nodemon
    npm install
```

## Settings

Create database in mongo with the name ***listingPeople***, create an user asigned to it and a collection ***people***.

Create a script file ***run.sh*** in root path of the project:

```
export SERVICE_PORT=8000
export MONGO_USER=YOUR USER
export MONGO_PASSWORD=YOUR PASSWORD
export MONGO_HOST=localhost
export MONGO_DATABASE=listingPeople
nodemon dist/app/index.js
```

## RUN

`npm run watch`

## RUN INTEGRATIONS TEST

With the project runing:

`npm test`