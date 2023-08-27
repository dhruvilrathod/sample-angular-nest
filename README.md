# Angular + NestJS Boilerplate

This project is a basic orchestration of using Angular and NestJS in a single project under common environment

## Requirements

Recommanded requirements for the installation of this project:

- `NodeJS Version 18.15.0`
- `Angular Version 16.1.8`
- `NestJS Version 10.0.0`


## Installation 

```bash
git clone https://github.com/dhruvilrathod/sample-angular-nest

cd sample-angular-nest

npm install

```
    
## Run Locally

To only run Angular frontend

```
npm run frontend-start
```

To only run NestJS backend

```
npm run backend-start
```
To run fullstack (Frontend + Backend combined) project

```
npm run fullstack-run-dev
```

*For build and test commands in detail, refer `package.json`*
## Docker Support (For Development)

To create an Image of this project

```
docker build --no-cache -t sample-angular-nest-image:latest -f Dockerfile.dev .
```

To run the container with connectivity at port: `8082`

```
docker run --rm -it -p 3000:3000/tcp -p 8082:80/tcp sample-nest-angular-image:latest
```

## Docker Support (For Production)

To create an Image of this project

```
docker build --no-cache -t sample-angular-nest-image:latest -f Dockerfile.prod .
```

To run the container with connectivity at port: `8082`

```
docker run --rm -d -p 8082:80/tcp sample-nest-angular-image:latest
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@dhruvilrathod](https://www.github.com/dhruvilrathod)


*More things are coming soon... (Hot Reloading, Load Balancer etc.)*