const mongoose = require("mongoose");
const vehicle = new mongoose.Schema({
    id:{
        type:String,
        required:true,

    } ,
    licensePlateNumber:{
        type:String,
        required:true,

    } ,
    manufacturerName: {
        type:String,
        required:true,

    }  ,
    model: {
        type:String,
        required:true
    },
    fuelType:{
        required:true,
        type:String,
        enum : ['PETROL', 'DEISEL', 'ELECTRIC']
    },
    ownerName:{
        type:String,
        required:true,
    },

    rc_status:{
        type:String,
        required:true,
        enum : ['Active', 'Inactive']

    }, 
    vehicleColor:{
        type:String,
        required:true,
    } ,

    registrationDate:{
        created: Date,
        },

    fitnessUpto: {
        created: Date,
    },
    roadTaxUpto:{
        created: Date,

    } ,
    insuranceUpto:{
        created: Date,

    } ,
})

const vehicleDetails = mongoose.model("Vehicle_Details", vehicle);

module.exports= vehicleDetails
