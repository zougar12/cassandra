// server.js
const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
