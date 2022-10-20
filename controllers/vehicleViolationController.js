const { response } = require("express");
const Violation_Vehicle = require("../models/vehicleViolation");

class Vio_Vehicle {
  createVehicle_violation = async (req, res) => {
    try {
      const id = req.body.id;
      const licensePlateNumber = req.body.licensePlateNumber;
      const violationType = req.body.violationType;
      const status = req.body.status;
      const date = req.body.date;
      const location = req.body.location;
      const videoUrl = req.body.videoUrl;

      if (!id) {
        throw {
          message: "Please enter a id!",
        };
      }

      if (!licensePlateNumber) {
        throw {
          message: "Please enter a licensePlateNumber!",
        };
      }

      if (!violationType) {
        throw {
          message: "Please enter a violationType!",
        };
      }

      if (!status) {
        throw {
          message: "Please enter a status!",
        };
      }

      if (!date) {
        throw {
          message: "Please enter a date!",
        };
      }
      if (!location) {
        throw {
          message: `Please enter a location!`,
        };
      }

      if (!videoUrl) {
        throw {
          message: `Please enter a videoUrl!`,
        };
      }
     
      const response = await Violation_Vehicle.create({ id, licensePlateNumber, violationType,status, date,location,videoUrl});
      res.send({
        status: true,
        response: response,
        message: "Successfully Created Violaton-Vehicle Details",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getViolation_Vehicles = async (req, res) => {
    const response = await Violation_Vehicle.find().populate();
    res.status(201).send(response);
  };

  getViolation_Vehicle = async (req, res) => {
    const id = req.query.id;
    const response = await Violation_Vehicle.findOne({_id:id});
    res.send(response);
  };

  updateViolation_Vehicle = async (req, res) => {
    const id = req.body.id;
    const ownerName = req.body.ownerName;   
    const response = await Violation_Vehicle.updateMany(

      { _id: id },
      { ownerName: ownerName },
    );
    res.send(response);
  };

  deleteViolation_Vehicle = async (req, res) => {
    const id = req.body.id
    const response = await Violation_Vehicle.deleteOne(
      { _id: id},
     );
    res.send(response);
  };
}
module.exports = new Vio_Vehicle();




