var express = require('express');
var cors = require('cors')

var geniousRouter = require('./routes/genious');

var app = express();

app.use(cors());

app.use('/genious', geniousRouter);

module.exports = app;
