const express = require("express");
const {
	getAllTourTripDetails,
	fetchAllTourTripDetails,
	addTourTripDetails,
	updateTourTripDetails,
	deleteTourTripDetails,
	getSingleTourTripDetails,
	fetchTourTripDetailsByPlaceName,
	fetchTourTripDetailsByStatusType,
} = require("../controllers/TourTripController");

const router = express.Router();

//get all Tour Trip Details
router.get("/all", getAllTourTripDetails);

//fetch all Tour Trip Details
router.get("/fetch", fetchAllTourTripDetails);

//add Tour Trip Details
router.post("/create", addTourTripDetails);

//update Tour Trip Details
router.put("/update/:tripId", updateTourTripDetails);

//delete Tour Trip Details
router.delete("/delete/:tripId", deleteTourTripDetails);

//get single Tour Trip Details by id
router.get("/getTourTripById/:tripId", getSingleTourTripDetails);

//fetch Tour Trip Details by Place Name
router.get("/fetch/:placeName", fetchTourTripDetailsByPlaceName);

//fetch Tour Trip Details by Status Type
router.get("/fetch/:statusType", fetchTourTripDetailsByStatusType);

module.exports = router;
