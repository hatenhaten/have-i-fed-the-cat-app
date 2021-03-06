const express = require('express');
const { Cat } = require('./models');

const app = express();

// we expect to have to parse json from request bodies
app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body)
        .then(cat => res.status(201).json(cat))
        .catch(error => res.sendStatus(res.status(400).json(error)));
});

app.get('/cats', (req, res) => {
    Cat.findAll(req.body)
        .then(cat => res.status(201).json(cat))
        .catch(error => res.sendStatus(400));
});

app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId)
        .then(cat => res.status(201).json(cat))
        .catch(error => res.sendStatus(400));
});

app.patch('/cats/:catId', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.catId } })
        .then(cat => res.status(201).json(cat))
        .catch(error => res.sendStatus(400));
});

app.patch('/feed/:catId', (req, res) => {
    Cat.update({lastFed: new Date() }, { where: { id: req.params.catId } })
        .then(cat => res.status(201).json(cat))
        .catch(error => res.sendStatus(400));
});

app.delete('/cats/:catId', (req, res) => {
    Cat.destroy({ where: { id: req.params.catId } })
        .then(cat => res.status(201).json(cat))
        .catch(error => res.sendStatus(400));
});




// we will put our routes and controller functions here

module.exports = app;