const express = require('express');
const { getAlluser, registerController, loginController } = require('../controllers/userController');
const Cardetails = require("../models/CarModel")

//router object 
const router = express.Router();//Routing refers to how an application's endpoints (URIs) respond to client requests

//GET ALL USER || GET
router.get('/all-users',getAlluser)

//CREATE USER || POST
router.post('/register',registerController)

//CREATE LOGIN || POST
router.post('/login',loginController)

//CREATE LOGIN || POST
router.post('/adminlogin',loginController)


router.get("/adminpage", async (req, res) => {
    try {
      const cardetails = await Cardetails.find();
      res.status(200).json(cardetails);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  router.post("/newcar", async (req, res) => {
    console.log(req.body)
    try {
      const { carname, type, model, milage, perkm, availablefrom, availabletill,image, description, cardetails, details } =  req.body
      
      const carData = new Cardetails({ carname, type, model, milage, perkm, availablefrom, availabletill, image, description, cardetails, details });
      await carData.save();
  
      res.status(201).json({ message: 'Car details saved successfully' });
    } catch(error){
      console.error(error);
      res.status(500).json({ error:'Internal server error'});
    }
  });



router.put(`/editcar/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      carname,
      type,
      model,
      milage,
      perkm,
      availablefrom,
      availabletill,
      image,
      description,
      cardetails,
      details,
    } = req.body;

    const car = await Cardetails.findById({_id:id});

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    car.carname = carname || car.carname;
    car.type = type || car.type;
    car.model = model || car.model;
    car.milage = milage || car.milage;
    car.perkm = perkm || car.perkm;
    car.availablefrom = availablefrom || car.availablefrom;
    car.availabletill = availabletill || car.availabletill;
    car.image = image || car.image;
    car.description = description || car.description;
    car.cardetails = cardetails || car.cardetails;
    car.details = details || car.details;

    const updatedCar = await car.save();

    res.status(200).json({ message: "Car details updated successfully", data: updatedCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/editcar/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Cardetails.findById(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    await car.remove();

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;


