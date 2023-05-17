const express = require("express");
const {
	getAllBookTourTripDetails,
	createBookTourTripDetails,
	updateBookTourTripDetails,
} = require("../controllers/BookTourTripController");

const router = express.Router();

//get all Tour Trip Details
router.get("/all", getAllBookTourTripDetails);

//add Tour Trip Details
router.post("/create", createBookTourTripDetails);

//update Tour Trip Details
router.put("/update/:tripId", updateBookTourTripDetails);

module.exports = router;
