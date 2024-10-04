const express = require('express');
const dotenv = require("dotenv");

const app = express();
const cookieParser = require('cookie-parser');

// use Middleware
app.use(express.json());
app.use(cookieParser());
dotenv.config({path:'./config/config.env'});

module.exports = app;
