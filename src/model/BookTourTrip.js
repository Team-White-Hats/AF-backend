const mongoose = require("mongoose");

const BookTourTripSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},

	lastName: {
		type: String,
		required: true,
	},

	country: {
		type: String,
		required: true,
	},

	visitPlaceName: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		required: true,
	},

	gender: {
		type: String,
		required: true,
	},

	emailAddress: {
		type: String,
		required: true,
	},

	phoneNumber: {
		type: String,
		required: true,
	},
});

const BookTourTrip = mongoose.model(
	"BookTourTripManagement",
	BookTourTripSchema,
);
module.exports = BookTourTrip;
