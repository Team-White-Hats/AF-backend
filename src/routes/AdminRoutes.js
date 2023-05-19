const express = require("express");
const {
    registerAdmin,
    getUsers,
} = require("../controllers/AdminController");


const router = express.Router();
//get all Review
router.get("/all",getUsers);
//create Review
router.post("/create", registerAdmin);


module.exports = router;