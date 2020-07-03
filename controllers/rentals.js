const mongoose = require("mongoose");

const Rental = mongoose.model("Rental");

// Get all the rented books
module.exports.booksOnLoan = function booksOnLoan(req, res, next) {
    Rental.find({ 'rented': true }).populate('book').exec((error, rentals) => {
        if(error)
            res.status(500).json({ 'message': 'Error while retrieving rented books' });
        else {
            let books = rentals.map(r => r.book);
            res.status(200).json(books);
        }
    });
}

// Rent a book by creating a rental document
module.exports.rentBook = function rentBook(req, res, next) {
    let newRental = new Rental(req.body);
    newRental.save((error, rentalObj) => {
        if(error)
            res.status(500).json({ 'message': 'Error while creating rental book' });
        else {
            res.status(200).json(rentalObj);
        }
    });
}