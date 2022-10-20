const mongoose = require("mongoose");
const Violation_vehicle = new mongoose.Schema({
    id:{
        type:String,
        required:true,

    } ,
    licensePlateNumber:{
        type:String,
        required:true,
    },
    violationType:{
        required:true,
        type:String,
    },
    status:{
        type:String,
        required:true,
        enum:['Paid', 'Unpaid']
    },

    date:{
        // required:true,
        type: Date,
    }, 

    location:{
        type:String,
        required:true,
    } ,

    videoUrl:{
        type:String,
        required:true
        },
  
})

const Violation_Vehicle = mongoose.model("Vehicle-Violation", Violation_vehicle);

module.exports= Violation_Vehicle;
