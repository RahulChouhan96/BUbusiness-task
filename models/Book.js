const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    isbn: String,
    author: String
});

mongoose.model('Book', BookSchema);