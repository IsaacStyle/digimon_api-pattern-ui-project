# Digimon Display App

This project is a simple React application that displays a list of Digimon characters. The app uses React and React Router DOM to fetch and display the data.

Deployed Link: [Digimon Api Project](https://gleeful-kulfi-609dd6.netlify.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Installation

To install the application, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/username/digimon_api-pattern-ui-project.git
   ```

2. Change to the project directory:

   ```sh
   cd digimon_api-pattern-ui-project
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm start
```

The application will be accessible at `http://localhost:3000`.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): A routing library for React applications

### API

You will need to connect to an API that provides the necessary data about Digimon characters. One such example is the [Digimon API](https://digimon-api.vercel.app/). Please refer to the API documentation to set up the correct endpoints and usage.

Example API endpoints:

- Get all Digimon: `https://digimon-api.vercel.app/api/digimon`
- Get Digimon by name: `https://digimon-api.vercel.app/api/digimon/name/{name}`
