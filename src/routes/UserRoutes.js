const express = require("express");
const {
    registerUser,
    getUsers,
} = require("../controllers/UserController");


const router = express.Router();
//get all Review
router.get("/all",getUsers);
//create Review
router.post("/create", registerUser);


module.exports = router;