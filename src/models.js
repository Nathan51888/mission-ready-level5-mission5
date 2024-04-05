const mongoose = require('mongoose');

const mongoHost = process.env.MONGODB_SERVICE_HOST || 'localhost';
const mongoPort = process.env.MONGODB_SERVICE_PORT || 27017;

mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/mission5`);

const stationSchema = new mongoose.Schema({
    name: String,
    location: String,
    services: {
        type: [String],
        enum: ['carWash', 'evCharging', 'preOrderCoffee', 'food', 'engineOils', 'lpgBottleSwap', 'giftCards']
    },
    gas: Number,
});

const StationModel = new mongoose.model('Station', stationSchema);

module.exports = { StationModel };
