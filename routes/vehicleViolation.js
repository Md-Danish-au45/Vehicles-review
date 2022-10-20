const router = require("express").Router();
const violationVehicle = require("../controllers/vehicleViolationController")

//vehicle router

// posting vehicles
router.post("/addVioVehicle", violationVehicle.createVehicle_violation);

// getting all vehicles
router.get("/vioVehicles", violationVehicle.getViolation_Vehicles);

// searching single-vehicle
router.get("/single-vioVehicle", violationVehicle.getViolation_Vehicle);

// updating vehicles
router.put("/update-vioVehicle", violationVehicle.updateViolation_Vehicle);

// deleting vehicles
router.delete("/delete-vioVehicle", violationVehicle.deleteViolation_Vehicle);

module.exports = router;