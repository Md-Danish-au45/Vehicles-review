const mongoose = require("mongoose")

function dbConnection(){
    mongoose
    .connect("")
    .then(() =>{
        console.log("database is connected")
    })
    .catch(() =>{
        console.log("error!!! please check your db!!!")
    })
}

module.exports = dbConnection;
