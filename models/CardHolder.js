const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardHolderSchema = new Schema({
    firstName: String,
    lastName: String,
    cardNumber: Number
});

mongoose.model('CardHolder', CardHolderSchema);