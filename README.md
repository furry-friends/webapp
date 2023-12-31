# Furry friends Web app

NOTE: This project has only tested in Chrome browser running on a macOS.

## Features have been implemented

1. Display a list of cats with their details.
2. Add / Edit / Delete a cat.
3. Sort cats by name, age or id.
4. Search cats by name.
5. Upload cat picture(Be aware of the size of the pictures, becuase they are
   saved in localStorage as base64 encoded string ).

## Frameworks and libraries used

1. React
2. Tailwindcss

## `frontend-lib` dependency

<https://github.com/furry-friends/frontend-lib>

The code shared between the React.js web app and the React Native app.
Because I heard that we are planning to use React Native for the mobile app, and
the goal is to have code shared between both the web and mobile applications as
much as possible.

## Running locally

```bash
npm install
npm start
```

## Unit tests

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Screenshots

<img src="https://raw.githubusercontent.com/furry-friends/webapp/main/doc/screenshot.png" alt="screenshot">

<img src="https://raw.githubusercontent.com/furry-friends/webapp/main/doc/screenshot2.png" alt="screenshot">
