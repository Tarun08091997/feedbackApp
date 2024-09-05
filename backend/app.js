const express = require('express');

const app = express();

// use Middleware
app.use(express.json());

module.exports = app;