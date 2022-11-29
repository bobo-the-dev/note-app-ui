# Note App UI
## The Simple Note App

[![CircleCI](https://circleci.com/gh/bobo-the-dev/note-app-ui.svg?style=shield)](https://github.com/bobo-the-dev/note-app-ui)

## Features

- CRUD The Note

## Tech

- [Angular](https://angular.io/) - v15.0.0
- [Node.js](https://nodejs.org/) - v18.12.1
- [Bootstrap](https://getbootstrap.com/) - v5.2.3


## Installation (via Angular CLI)

Requires (mandatory)
- [Angular CLI](https://angular.io/cli)
- [Node.js](https://nodejs.org/)

Install the dependencies and start the server.

```sh
git clone https://github.com/bobo-the-dev/note-app-ui.git
cd note-app-ui
npm install
ng serve
```
Verify the app by navigate to

```sh
localhost:4200
```

## Installation (via Docker)

Requires (mandatory)
- [Docker](https://www.docker.com/)


Run the Docker command

```sh
docker run -d -p 4200:80 -t bobothedev/note-app-ui:0.0.1
```
Verify the app by navigate to

```sh
localhost:4200
```
## License

MIT


