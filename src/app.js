const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const router = require('./router');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(router);

module.exports = app;
