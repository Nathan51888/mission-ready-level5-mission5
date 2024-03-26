const express = require('express');
const app = express();

const router = require('./routes/router.js');

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
