const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
   
  },

 productCategory: {
    type: String,
   
  },

  productPrice: {
    type: String,
   
  },

  productImage: {
    type: String,
    
  },
 contacts: {
    type: String,
  
  },
 quantity: {
    type: Number,
   
  },
  status:{
    type: String,
   
  },
  smallDes: {
    type: String,
    
  },

  longDes: {
    type: String,
   
  },
});

const Product = mongoose.model("StoreProduct", ProductSchema);

module.exports = Product;