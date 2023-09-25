const Review = require("../model/ReviewModel");

const getAllReview = async (req, res) => {
	try {
		const cors = await Review.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};


const createReview = (req, res) => {
    Review.create(req.body, (err, data) => {
      if (err) res.status(500).json({ error: err });
      res.status(201).json(data);
    });
  };

const deleteReview = (req, res) => {
  Review.deleteOne({ _id: req.params.rid }, (err) => {
    if (err) res.status(500).json({ error: err });

    res.status(204).json({ status: "Your Review Deleted!" });
  });
};

const updateReview = async (req, res) => {
  const rid = req.params.rid;

  try {
    let review = await Review.findById(rid);

    if (!review) {
      return res.status(404).json({ updated: "Review not found" });
    }

    review = await Review.findByIdAndUpdate(rid, req.body);
    res.status(201).json({ updated: "Review updated successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleReview= (req, res) => {
  console.log(req.params.rid);
  Review.findById(req.params.rid, (err, data) => {
    if (err) return res.status(401).json({ review: "not found" });

    res.status(200).json({ review: data });
  });
};

module.exports = {
    getAllReview,
    createReview,
    deleteReview,
    getSingleReview,
    updateReview,
  };