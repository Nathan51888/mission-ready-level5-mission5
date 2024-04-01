const { StationModel } = require('./models');

async function seedData() {
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
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'food'],
        gas: 2.719,
    },
    {
        name: 'Z Sandringham',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'evCharging', 'preOrderCoffee', 'food'],
        gas: 2.873,
    },
    {
        name: 'Z MT Albert',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'preOrderCoffe', 'food'],
        gas: 2.893,
    },
    {
        name: 'Z Point Chev',
        location: '700 mount Albert Road, Royal Oak, Auckland',
        services: ['carWash', 'evCharging', 'food'],
        gas: 2.912,
    }
]
