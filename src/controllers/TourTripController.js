const TourTrip = require("../model/TourTripModel");

const getAllTourTripDetails = async (req, res) => {
	try {
		const cors = await TourTrip.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};

const fetchAllTourTripDetails = (req, res) => {
	TourTrip.find({}, (err, docs) => {
		if (!err) {
			res.status(200).json({ tourTrip: docs });
		} else {
			res.status(500).json({ error: err });
			throw err;
		}
	});
};

const addTourTripDetails = (req, res) => {
	TourTrip.create(req.body, (err, data) => {
		if (err) res.status(500).json({ error: err });
		res.status(201).json(data);
	});
};

const updateTourTripDetails = async (req, res) => {
	const tripId = req.params.tripId;

	try {
		let tourTrip = await TourTrip.findById(tripId);

		if (!tourTrip) {
			return res
				.status(404)
				.json({ updated: "Tour Trip Details not found" });
		}

		tourTrip = await TourTrip.findByIdAndUpdate(tripId, req.body);
		res.status(201).json({
			updated: "Tour Trip Details updated successfully",
		});
	} catch (error) {
		res.status(400).json(error.message);
	}
};

const deleteTourTripDetails = (req, res) => {
	TourTrip.deleteOne({ _id: req.params.tripId }, (err) => {
		if (err) res.status(500).json({ error: err });

		res.status(204).json({
			status: "Tour Trip Details deleted Successfully!",
		});
	});
};

const getSingleTourTripDetails = (req, res) => {
	console.log(req.params.tripId);
	TourTrip.findById(req.params.tripId, (err, data) => {
		if (err) return res.status(401).json({ tourTrip: "not found" });

		res.status(200).json({ tourTrip: data });
	});
};

const fetchTourTripDetailsByPlaceName = (req, res) => {
	TourTrip.find({ placeName: req.params.placeName }, (err, docs) => {
		if (!err) {
			res.status(200).json({ tourTrip: docs });
		} else {
			res.status(500).json({ error: err });
			throw err;
		}
	});
};

const fetchTourTripDetailsByStatusType = (req, res) => {
	TourTrip.find({ statusType: req.params.statusType }, (err, docs) => {
		if (!err) {
			res.status(200).json({ tourTrip: docs });
		} else {
			res.status(500).json({ error: err });
			throw err;
		}
	});
};

module.exports = {
	getAllTourTripDetails,
	fetchAllTourTripDetails,
	addTourTripDetails,
	updateTourTripDetails,
	deleteTourTripDetails,
	getSingleTourTripDetails,
	fetchTourTripDetailsByPlaceName,
	fetchTourTripDetailsByStatusType,
};
