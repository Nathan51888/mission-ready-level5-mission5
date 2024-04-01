const mongoose = require('mongoose');
const { StationModel } = require('./models');
const { seedData } = require('./seeder');

mongoose.connect('mongodb://localhost:27017/mission5');

function initStations(req, res) {
    seedData();
    res.status(201).send('items created');
}

async function getStations(req, res) {
    const query = await listStations();
    res.send(query);
}

async function listStations() {
    const query = await StationModel.find();
    console.log(`found ${query.length}`);
    return query;
}

module.exports = { getStations, initStations };
