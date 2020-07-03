const express = require("express");
const rentalCtrl = require("../controllers/rentals");

const router = express.Router();

// Get all the rented books
router.get('/books-on-loan', rentalCtrl.booksOnLoan);

// Rent a book by creating a rental document
router.post('/rent-book', rentalCtrl.rentBook);

module.exports = router;