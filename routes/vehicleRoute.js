const router = require("express").Router();
const vehicle = require("../controllers/vehicleController")

//vehicle router

// posting vehicles
router.post("/addVehicle", vehicle.createVehicle);

// getting all vehicles
router.get("/vehicles", vehicle.getVehicles);

// searching single-vehicle
router.get("/single-vehicle", vehicle.getVehicle);

// updating vehicles
router.put("/update-vehicle", vehicle.updateVehicle);

// deleting vehicles
router.delete("/delete-vehicle", vehicle.deleteVehicle);

module.exports = router;
