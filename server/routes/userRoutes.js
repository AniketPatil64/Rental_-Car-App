const express = require('express');
const { getAlluser, registerController, loginController } = require('../controllers/userController');
const {adminregister,adminloginController} = require('../controllers/adminController');
const {getbookdetail,bookdetailcontrol,updatebooking} = require('../controllers/bookdetailcontrol');
const Cardetails = require("../models/CarModel")

//router object 
const router = express.Router();//Routing refers to how an application's endpoints (URIs) respond to client requests

//GET ALL USER || GET
router.get('/all-users',getAlluser)

//CREATE USER || POST
router.post('/register',registerController)

//CREATE LOGIN || POST
router.post('/login',loginController)

//CREATE ADMIN || POST
router.post('/adminregister',adminregister);

//CREATE LOGIN || POST
router.post('/adminlogin',adminloginController)

//CREATE BOOKDETAILS OF DESTINATION AND DATE || POST

router.get('/getbookingdetails',getbookdetail);


//CREATE BOOKDETAILS OF DESTINATION AND DATE || POST

router.post('/bookingdetails',bookdetailcontrol);

//UPDATE BOOKDETAILS OF DESTINATION AND DATE || PUT

router.put('/updatebooking/:id',updatebooking);


router.get("/adminpage", async (req, res) => {
    try {
      const cardetails = await Cardetails.find();
      res.status(200).json(cardetails);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  router.post("/newcar", async (req, resp) => {
    console.log(req.body);
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
    const CarData = new Cardetails({
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
    });
    CarData.save()
      .then(() => {
        resp.send({ message: "successful" });
      })
      .catch((err) => {
        resp.send({ message: err });
        console.log(err);
      });
  });


  router.put("/editcar", (req, resp) => {
    resp.send("editcar");
  });

  router.delete("/editcar", (req, resp) => {
    resp.send("delete");
  });


module.exports = router;


