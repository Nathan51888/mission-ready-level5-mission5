const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mission5');

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
