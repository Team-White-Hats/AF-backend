const BookTourTrip = require("../model/BookTourTrip");

const getAllBookTourTripDetails = async (req, res) => {
	try {
		const cors = await BookTourTrip.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};

const createBookTourTripDetails = (req, res) => {
	BookTourTrip.create(req.body, (err, data) => {
		if (err) res.status(500).json({ error: err });
		res.status(201).json(data);
	});
};

const updateBookTourTripDetails = async (req, res) => {
	const tripId = req.params.tripId;

	try {
		let tourTrip = await BookTourTrip.findById(tripId);

		if (!tourTrip) {
			return res
				.status(404)
				.json({ updated: "Tour Trip Details not found" });
		}

		tourTrip = await BookTourTrip.findByIdAndUpdate(tripId, req.body);
		res.status(201).json({
			updated: "Tour Trip Details updated successfully",
		});
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	getAllBookTourTripDetails,
	createBookTourTripDetails,
	updateBookTourTripDetails,
};
