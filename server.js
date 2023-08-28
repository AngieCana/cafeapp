const express = require('express');
const path = require('path');
const logger = require('morgan')
const favicon = require('serve-favicon');
require('dotenv').config();
require('./config/database') //connect to database

const app = express();

//middleware
app.use(logger('dev'));

app.use(express.json());

//config both favicon and static middleware
//serve from Build folder
//The catch all route is necessary to return the index.html on all non-AJAX requests
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

//routes

//create catch all route using (/*)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//listening
 app.listen(5000, () => {
  console.log('listening on port 5000')
 });