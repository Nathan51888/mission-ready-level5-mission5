const express = require('express');
const dotenv = require('dotenv');
const app = express();

// middleware
dotenv.config();
express.json();

// router
const router = require('./router');
app.use('/', router);

app.get('/', (req, res) => res.send("yay it's working"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} (${process.env.PORT && "env"})`);
});
