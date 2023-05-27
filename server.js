const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');
const lawnsRouter = require('./routes/lawns');

mongoose.connect(config.database)
    .then(() => console.log('mongodb connection successful!'))
    .catch((err) => console.error(err));

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lawns', lawnsRouter);

app.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});