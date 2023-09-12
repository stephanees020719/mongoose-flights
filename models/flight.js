const mongoose = require("mongoose");
 
const flightSchema = new mongoose.Schema({
    userName:{
        type: String
    },
    airline: { 
        type: String, 
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: { 
        type: Number, 
        required: true, 
        min: 10, 
        max: 9999
    },
    departs: { 
        type: Date,
        // default: () => {  ///trying to set up the deafult year 
        //     const oneYearFromNow = new Date();
        //     oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        //     return oneYearFromNow;
        // } 
       
    }
},{
    timestamps: true,
});
 
const Flight = mongoose.model('Flight', flightSchema);
 
module.exports = Flight;
 