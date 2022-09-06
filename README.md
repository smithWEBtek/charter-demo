This project was created with [Create React App](https://github.com/facebook/create-react-app), and serves data with [json-server](https://www.npmjs.com/package/json-server)

### Setup

In the root of the project, run:

```
$ npm install
```

### There are three commands for starting the App, the json-server, or both.

SEE package.json

```
 "scripts": {
    "start": "react-scripts start",
    "start-data": "json-server data.json -p 3001",
    "start-all": "json-server data.json -p 3001 & react-scripts start",
```

### To start the app and the json-server, run:

```
$ npm run start-all
```

#### This runs the app on port 3000, with data.

Open [http://localhost:3000](http://localhost:3000) to view the App in your browser.

#### and the json-server for data on port 3001.

Open [http://localhost:3001/data.json](http://localhost:3001/data.json) to view the JSON data in your browser.

---

### To start the App alone with no data, run:

```
$ npm start
```

The app will run on `http://localhost:3000`, with no data.

---

### To start the json-server for data, in a new terminal tab, run:

```
$ npm run start-data
```

Open [http://localhost:3001/data.json](http://localhost:3001/data.json) to view the JSON data in your browser.

---

#### To run the test suite:

In a new terminal tab, in the project root, run:

```
$ npm test
```

Then:

```
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
