# Music Library Web Application

Playground project implementing a music library web app. Built with [ReactJS](https://reactjs.org/) and [Redux](https://redux.js.org/). [Material-UI](https://material-ui.com/) components are used to implement Google's [Material Design](https://material.io/design/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so its docs could be helpful for development.

## Features

- Simple playlist and controls interface
- Real-time notifications for what other people are listening (using [WebSockets](https://en.wikipedia.org/wiki/WebSocket))

## Possible Extensions

- Volume control
- Interactive song time progress bar
- Artists & albums interfaces
- User profile & preferences

# Quick Start

## Prerequisites

Define an .env file at the root directory of the project containing all the environment variables needed. The following environment variables are required:

- `REACT_APP_API_URL` - The backend RESTful API URL
- `REACT_APP_SOCKET_SERVER_URL` - The backend Websockets server URL.
- `NODE_PATH=src/` to resolve relative paths to `src/` in your code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

[Jest](https://jestjs.io/) is used for test running and assertions. [Enzyme](https://airbnb.io/enzyme/index.html) is used for Jest snapshots shallow rendering.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Code Style

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with [Airbnb style guide](https://github.com/airbnb/javascript).
