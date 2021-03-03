const express = require('express');

const app = express();

// we expect to have to parse json from request bodies
app.use(express.json());

// we will put our routes and controller functions here

module.exports = app;