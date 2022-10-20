const mongoose = require("mongoose")

function dbConnection(){
    mongoose
    .connect("mongodb+srv://MdDanish:0786786@cluster0.qfylmqm.mongodb.net")
    .then(() =>{
        console.log("database is connected")
    })
    .catch(() =>{
        console.log("error!!! please check your db!!!")
    })
}

module.exports = dbConnection;