### This project was created with [Create React App](https://github.com/facebook/create-react-app), and serves data with [json-server](https://www.npmjs.com/package/json-server)

To start both the data and the App, run:

```
npm start
```

This will run the two commands in package.json:

```
  "scripts": {
    "start": "json-server data.json -p 3001 & react-scripts start",
```

### This runs the app on port 3000, and the json-server for data on port 3001.

Open [http://localhost:3000](http://localhost:3000) to view the App in your browser.

To sart the local database server alone, in the project root, run:

```
json-server data.json -p 3001
```

This runs the json data at localhost:3001.

Open [http://localhost:3001/data.json](http://localhost:3001/data.json) to view it in your browser.

### To run the test suite:

In a third terminal, in the project root, run:

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
