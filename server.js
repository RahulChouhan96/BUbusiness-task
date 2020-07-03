// Register all the DB models
require("./models/Rental");
require("./models/Book");
require("./models/CardHolder");

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const rentalRouter = require("./routes/rentals");

// Connect with DB
mongoose.connect('mongodb://localhost:27017/bub');
const app = express();

app.use(bodyParser.json());
app.use(rentalRouter);

// Start the server
app.listen(3500, 'localhost', () => {
    console.log("Server running successfully");
});