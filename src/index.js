const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const router = require('./routes/router.js');

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
