# Hapi Plants Backend

Backend API for Hapi Plants system. Build on top of [Nest.js](https://github.com/nestjs/nest) (Node Express/ Typescript)

Other stacks used:
- [TypeORM](http://typeorm.io/) . A Conprenhensive and Advance ORM library for typescript.
- [Chance JS](http://chancejs.com/). This library used to generate fake date in the database seeder.
- [PubNub SDK](https://www.pubnub.com). PubNub is a Realtime Data Streaming And Communication Platform.

## Domain End-point Documentation

Domain is the entitiy we manage, it represent a specific data encapsulated in its own end-point.
Documentation for each domain route/endpoint is available here:
- [User](https://v1userhapiplants.docs.apiary.io/#)
- [Pot](https://v1pothappiplants.docs.apiary.io/#)
- ...

## Setup & Run

Prerequisites:
- NodeJS (v.8.9.0 LTS recommended)
- MySQL

Steps:
- Create new MYSQL database e.g `hapiplant`
- Configure `ormconfig.json` file in the project root directory, if the file doesn't exist you can copy `ormconfig.json.example`
  Change `username`, `password`, and `database` according to your local MYSQL configuration.

- Install Typescript and TypeORM

```sh
  $ npm install typescript, typeorm -g
```

  This command will install all project dependecies, and install `typescript` compiler and `typeorm cli` in the global environment (OS)

- Install The Project Package

  From the project root directory run this command in the terminal:
  
```sh
  $ npm install
```


## Run Local Development Server

```sh
  $ npm start
```

or with autoreload demon:

```sh
  $ npm run start:watch
```


## Run Production Server

```sh
  $ npm run start:prod
```

# Database migration & seeder

## run seeder

```sh
  $ npm run seed
```
