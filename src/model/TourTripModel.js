const mongoose = require("mongoose");

const TourTripSchema = new mongoose.Schema({
	placeName: {
		type: String,
		required: true,
	},

	startLocation: {
		type: String,
		required: true,
	},

	endLocation: {
		type: String,
		required: true,
	},

	transportType: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	entryPrice: {
		type: String,
		required: true,
	},

    products: {
		type: String,
		required: true,
	},

    statusType: {
		type: String,
		required: true,
	},

    route: {
		type: String,
		required: true,
	},
});

const TourTrip = mongoose.model("TourTripManagement", TourTripSchema);

module.exports = TourTrip;
