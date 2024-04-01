const mongoose = require('mongoose');
const { StationModel } = require('./models');
const { seedData } = require('./seeder');

mongoose.connect('mongodb://localhost:27017/mission5');

function initStations(req, res) {
    seedData();
    res.status(201).send('items created');
}

async function getStations(req, res) {
    const service = req.query.service;
    console.log(service);

    if (!service) {
        const query = await listAllStations();
        res.send(query);
        return;
    }

    const query = await filterByService(service);
    res.send(query);
}

async function listAllStations() {
    const query = await StationModel.find();
    console.log(`found ${query.length}`);
    return query;
}

async function filterByService(service) {
    const query = await StationModel.find({ services: service});
    console.log(query);
    return query;
}

module.exports = { getStations, initStations };
