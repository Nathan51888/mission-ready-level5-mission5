const mongoose = require('mongoose');
const { StationModel } = require('./models');

mongoose.connect('mongodb://localhost:27017/mission5');

function initStations(req, res) {
    seedData();
    res.status(201).send('items created');
}

async function getStations(req, res) {
    const query = await listStations();
    console.log(query);
    res.send(query);
}

module.exports = { getStations, initStations };

async function seedData() {
    seed.map(async (item) => {
        const station = await new StationModel(item);
        await station.save();
    });
    console.log('seeding completed');
}

async function listStations() {
    const query = await StationModel.find();
    console.log(`found ${query.length}`);
    return query;
}

const seed = [
    {
        name: "Z Royal Oak",
        location: "700 mount Albert Road, Royal Oak, Auckland",
        services: ['carWash', 'evCharging', 'preOrderCoffee', 'food', 'engineOils', 'lpgBottleSwap', 'giftCards'],
        gas: 2.793,
    },
    {
        name: 'Z Ponsonby',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'evCharging'],
        gas: 2.719,
    },
    {
        name: 'Z Sandringham',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'evCharging'],
        gas: 2.873,
    },
    {
        name: 'Z MT Albert',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'evCharging'],
        gas: 2.893,
    },
    {
        name: 'Z Point Chev',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'evCharging'],
        gas: 2.912,
    }
]
