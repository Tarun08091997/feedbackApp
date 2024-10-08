const express = require('express');
const dotenv = require("dotenv");

const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your client's origin
    credentials: true,               // Allow cookies and credentials
}));

// use Middleware
app.use(express.json());
app.use(cookieParser());
dotenv.config({path:'./config/config.env'});

module.exports = app;
