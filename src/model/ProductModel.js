const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },

 productCategory: {
    type: String,
    required: true,
  },

  productPrice: {
    type: String,
    required: true,
  },

  productImage: {
    type: String,
    required: true,
  },

  smallDes: {
    type: String,
    required: true,
  },

  longDes: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("StoreProduct", ProductSchema);

module.exports = Product;