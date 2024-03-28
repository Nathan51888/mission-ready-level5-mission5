const mongoose = require('mongoose');
const mongoHost = process.env.MONGO_SERVICE_HOST || 'localhost';
const mongoPort = process.env.MONGO_SERVICE_PORT || 27017;

const Message = mongoose.model('Message', { message: String });

async function getMessages(req, res) {
    await mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/test`);

    const foundMessage = await Message.find()
    console.log(`Found ${foundMessage.length} messages`);
    res.send(foundMessage);

    mongoose.connection.close();
}

async function saveMessage(req, res) {
    await mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/test`);

    const newMessage = new Message({ message: 'this is a test' });
    const message = await newMessage.save();
    console.log('New message created');

    res.send(message);
    mongoose.connection.close();
}

module.exports = { getMessages, saveMessage };
