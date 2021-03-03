const express = require('express');
const { Cat } = require('./models');

const app = express();

// we expect to have to parse json from request bodies
app.use(express.json());
app.post('/cats', (req, res) => {Cat.create(req.body).then(cat => res.status(201).json(cat))});
app.get('/cats', (req, res) => {Cat.findAll(req.body).then(cat => res.status(201).json(cat))});
app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId).then(cat => res.status(201).json(cat))});

// we will put our routes and controller functions here

module.exports = app;