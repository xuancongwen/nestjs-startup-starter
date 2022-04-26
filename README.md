## NestJS Startup Starter

NestJS is a minimal Node framework for building web apps. NestJS Startup Starter includes an opinionated set of starter modules that's been set up for a very specific developer experience.

Those opinions include:

* Containerize everything
* Containerized developer experience
* At least 3 fully functional environments:
  1. Local
  2. Staging
  3. Production
* PostGIS for relational database, geography, and full text search
* Redis for caching, queueing, and idempotence
* Handle bars for simple templating (for quickie templates like admin dashboards)
* GraphQL with DataLoader for rapid front-end development
* Yarn for package management
* Cron for running jobs

## Developer setup

Install Node:
```bash
$ brew install node
```

Install [Docker](https://docs.docker.com/get-docker/).

Set up the database:

```bash
$ docker-compose up postgis-local
$ docker exec -it postgis-local createuser -U postgres localuser
$ docker exec -it postgis-local createdb -U postgres localdb
```

 Once you've done that, run the following:

```bash
$ npm install
```

## Running the app

```bash
$ docker-compose up
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
