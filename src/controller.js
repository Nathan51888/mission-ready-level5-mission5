const mongoose = require('mongoose');
const { StationModel } = require('./models');

mongoose.connect('mongodb://localhost:27017/mission5');

async function getStations(req, res) {
    const query = await listAllStations();
    res.send(query);
}

async function listAllStations() {
    const query = await StationModel.find();
    console.log(`found ${query.length}`);
    return query;
}

async function filterByService(service) {
    const query = await StationModel.find({ services: service });
    console.log(query);
    return query;
}

module.exports = { getStations };
