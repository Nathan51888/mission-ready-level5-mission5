const { StationModel } = require('./models');

async function seedData() {
    await StationModel.deleteMany({});
    seed.map(async (item) => {
        const station = await new StationModel(item);
        await station.save();
    });
    console.log('seeding completed');
}

module.exports = { seedData };

const seed = [
    {
        name: "Z Royal Oak",
        location: "700 mount Albert Road, Royal Oak, Auckland",
        services: ['carWash', 'evCharging', 'preOrderCoffee', 'food', 'engineOils', 'lpgBottleSwap', 'giftCards'],
        gas: 2.793,
    },
    {
        name: 'Z Ponsonby',
        location: '5/9 Williamson Avenue, Ponsonby, Auckland 1021',
        services: ['carWash', 'food'],
        gas: 2.719,
    },
    {
        name: 'Z Sandringham',
        location: '340 Sandringham Road, Sandringham, Auckland 1025',
        services: ['carWash', 'evCharging', 'preOrderCoffee', 'food'],
        gas: 2.873,
    },
    {
        name: 'Z MT Albert',
        location: '770/774 New North Road, Mount Albert, Auckland 1025',
        services: ['carWash', 'preOrderCoffee', 'food'],
        gas: 2.893,
    },
    {
        name: 'Z Point Chev',
        location: '1125/1143 Great North Road, Point Chevalier, Auckland 0110',
        services: ['carWash', 'evCharging', 'food'],
        gas: 2.912,
    },
    {
        name: 'Car Wash',
        location: '1125/1143 Great North Road, Point Chevalier, Auckland 0110',
        services: ['carWash'],
        gas: 2.150,
    },
    {
        name: 'Ev Charging',
        location: '1125/1143 Great North Road, Point Chevalier, Auckland 0110',
        services: ['evCharging'],
        gas: 2.510,
    },
]
