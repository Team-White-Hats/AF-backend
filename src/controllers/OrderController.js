const Order = require("../model/OrderModel");

const getAllOrders = async (req, res) => {
	try {
		const cors = await Order.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};

const createOrder= (req, res) => {
    Order.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};


module.exports = {
    getAllOrders,
    createOrder,
  };