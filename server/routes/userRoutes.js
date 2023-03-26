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


  router.put("/editcar", (req, resp) => {
    resp.send("editcar");
  });

  router.delete("/editcar", (req, resp) => {
    resp.send("delete");
  });


module.exports = router;


