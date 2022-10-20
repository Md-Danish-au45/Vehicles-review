const express = require("express")
const app = express();
const port = 8000;
const dbConnection = require("./db/dbConfig")
const vehicleRouter = require("./routes/vehicleRoute")
const violationVehicleRouter = require("./models/vehicleViolation")


app.use(express.json())
// middleware
app.use(violationVehicleRouter)
app.use(vehicleRouter)



// connection in database
dbConnection()

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})