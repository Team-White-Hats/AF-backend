const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    
    Event_ID: { 
        type:String,
       
    },
    title: {
        type:String,
    },
     category: {
        type:String,
    },
    description: {
        type:String,
    },
   
    location: { 
        type:String,
    },
    startDate: { 
        type:String,
    },
    endDate: { 
        type:String,
    },
    image: { 
        type:String,
    },
   
    maxAttendees: { 
        type:String,
    },
    cost: { 
        type:String,
    },
    organizer: { 
        type:String,
    }
});

const eventsModel = mongoose.model("eventsModel", eventSchema)
module.exports = eventsModel;


