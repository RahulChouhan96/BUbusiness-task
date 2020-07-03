const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
    cardHolder: { type: Schema.Types.ObjectId, ref: 'CardHolder' },
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
    rented: { type: Boolean, default: true }
});

mongoose.model('Rental', RentalSchema);