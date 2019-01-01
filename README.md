# Negotiation app

The app is based on the idea of a work contract negotiation: Employer and employee enter salary values and the app tells if the expectations meet.

## Requirements

- Node (tested with v11.5.0)
- Npm (tested with v6.4.1)

## Install dependencies

```
$> npm install
```

## How to launch the application

```
$> npm run serve
```

This command will launch the server on port 8080 and the app could be seen in the browser using the link http://127.0.0.1:8080/

## How to launch the tests

There are two kind of tests (unit and acceptance).

Unit tests could be executed using:

```
$> npm run test:unit
```

Acceptance tests are made with Cypress and launched using an interactive environment. To launch the environment:

```
$> npm run test:e2e
```

It will open a new window where a button to launch all the test could be used.
