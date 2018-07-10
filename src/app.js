const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const router = require('./router');
const {
  errorHandler,
  routeNotFoundHandler,
} = require('./globalHandlers');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(router);
app.all('*', routeNotFoundHandler);
app.use(errorHandler);

module.exports = app;
