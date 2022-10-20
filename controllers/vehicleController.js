const { response } = require("express");
const vehicleDetails = require("../models/vehicleModel");

class Vehicle {
  createVehicle = async (req, res) => {
    try {
      const id = req.body.id;
      const licensePlateNumber = req.body.licensePlateNumber;
      const manufacturerName = req.body.manufacturerName;
      const model = req.body.model;
      const fuelType = req.body.fuelType;
      const ownerName = req.body.ownerName;
      const rc_status = req.body.rc_status;
      const registrationDate = req.body.registrationDate;
      const fitnessUpto = req.body.fitnessUpto;
      const vehicleColor = req.body.vehicleColor;
      const roadTaxUpto = req.body.roadTaxUpto;
      const insuranceUpto = req.body.insuranceUpto;

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

      if (!manufacturerName) {
        throw {
          message: "Please enter a manufacturerName!",
        };
      }

      if (!model) {
        throw {
          message: "Please enter a model!",
        };
      }

      if (!fuelType) {
        throw {
          message: "Please enter a fuelType!",
        };
      }
      if (!ownerName) {
        throw {
          message: `Please enter a ownerName!`,
        };
      }

      if (!rc_status) {
        throw {
          message: `Please enter a rc_status!`,
        };
      }
      if (!registrationDate) {
        throw {
          message: "Please enter a registrationDate!",
        };
      }
      if (!fitnessUpto) {
        throw {
          message: "Please enter a fitnessUpto!",
        };
      }
      if (!vehicleColor) {
        throw {
          message: "Please enter a vehicleColor!",
        };
      }
      if (!roadTaxUpto) {
        throw {
          message: "Please enter a roadTaxUpto!",
        };
      }
      if (!insuranceUpto) {
        throw {
          message: "Please enter a insuranceUpto!",
        };
      }
      const response = await vehicleDetails.create({ id, licensePlateNumber, manufacturerName,model, fuelType,ownerName,rc_status,vehicleColor,registrationDate,fitnessUpto,roadTaxUpto,insuranceUpto });
      res.send({
        status: true,
        response: response,
        message: "Successfully Created Vehicle Details",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getVehicles = async (req, res) => {
    const response = await vehicleDetails.find().populate();
    res.status(201).send(response);
  };

  getVehicle = async (req, res) => {
    const id = req.query.id;
    const response = await vehicleDetails.findOne({_id:id});
    res.send(response);
  };

  updateVehicle = async (req, res) => {
    const id = req.body.id;
    const ownerName = req.body.ownerName;   
    const response = await vehicleDetails.updateMany(

      { _id: id },
      { ownerName: ownerName },
    );
    res.send(response);
  };

  deleteVehicle = async (req, res) => {
    const id = req.body.id
    const response = await vehicleDetails.deleteOne(
      { _id: id},
     );
    res.send(response);
  };
}
module.exports = new Vehicle();




