const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  id: {
    type: String,
   
  },

  productName: {
    type: String,
   
  },

  deliveryAddress: {
    type: String,
   
  },

  productImage: {
    type: String,
    
  },
 customeremail: {
    type: String,
  
  },
customerContacts: {
    type: String,
   
  },
  selectedPayment:{
    type: String,
   
  },
});

const order = mongoose.model("StoreOrder",OrderSchema);

module.exports =order;