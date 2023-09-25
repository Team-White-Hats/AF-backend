const mongoose = require('mongoose')
const registereventSchema = new mongoose.Schema({
    

     registerEvent_ID:{
        type:String,
     },

    full_Name: { 
        type:String,
       
    },
    NIC: {
        type:String,
    },
    passport_No: {
        type:String,
    },
    country: {
        type:String,
    },
   
    email: { 
        type:String,
    },
    Phone: { 
        type:String,
    },
    gender: { 
        type:String,
    },
    No_of_guests: { 
        type:String,
    }
   

});

const registereventsModel = mongoose.model("registereventsModel", registereventSchema)
module.exports = registereventsModel;

