/* Empty JS object to act as endpoint for all routes */
// const projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('Weather-Journal-App2'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

const projectData = [];

// GET route requests
app.get('/', function sendData(request, response) {
  response.send(projectData);
});

// POST route
app.post('/add', function getData(request, response) {
  newData = {
    temperature: request.body.temperature,
    date: request.body.date,
    feelings: request.body.feelings,
    feelslike: request.body.feelsLike,
    humidity: request.body.humidity,
    windSpeed: request.body.windSpeed,
    timeZone: request.body.tzName,
    content: request.body.description
  };

  // projectData.unshift(newData);
  projectData.push(newData);
});



