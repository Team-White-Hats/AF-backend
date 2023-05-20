const express = require("express");
const {
    getAllOrders,
    createOrder,
} = require("../controllers/OrderController");



const router = express.Router();

router.get("/all",getAllOrders);
//create product
router.post("/create",  createOrder);

module.exports = router;