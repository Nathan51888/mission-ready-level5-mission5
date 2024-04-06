const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

// router
const router = require('./router');
app.use('/api', router);

app.get('/', (req, res) => res.send("yay it's working"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} (${process.env.PORT && "env"})`);
});

// seeder
const { seedData } = require('./seeder');
seedData();
