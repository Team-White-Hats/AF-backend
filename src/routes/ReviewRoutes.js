const express = require("express");
const {
  createReview,
  getSingleReview,
  deleteReview,
  updateReview,
  getAllReview,

} = require("../controllers/ReviewController");



const router = express.Router();
//get all Review
router.get("/all",getAllReview);
//create Review
router.post("/create", createReview);
//update Review
router.put("/:rid", updateReview);
//delete Review
router.delete("/:rid", deleteReview);
//get Review by id
router.get("/getreviewbyId/:rid",getSingleReview);

module.exports = router;