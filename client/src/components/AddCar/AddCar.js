import React, { useState } from "react";
import Header from "../Header/Header";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios"

import "./AddCar.css";
function AddCar() {
  const [Image, setimage] = useState();
  const [url,seturl] = useState("");
  const [formdata,setformdata] = useState({
    carname:"",
    type:"",
    model:"",
    milage:"",
    perkm:"",
    availablefrom:"",
    availabletill:"",
    image:"",
    description:"",
    cardetails:"",
    details:""
  });

  //form making image ulr 
  const HandleImage = () => {
    const data = new FormData();
    data.append("file", Image);
    data.append("upload_preset", "Car-Images");
    data.append("cloud_name", "dplbl7yg9");
    fetch("https://api.cloudinary.com/v1_1/dplbl7yg9/image/upload", {
      method: "post",
      body: data
    })
      .then(resp=> resp.json())
      .then((data)=>  setformdata({
        ...formdata,
        image: data.url
      }))
      .catch((err) => {console.log(err)});
    
  };

  //form sumitting all the data 
const HandleChange = (e)=>{
  const {name,value} = e.target
  setformdata({
    ...formdata,
    [name]:value
  })
  console.log(formdata)

}

const Submitdata =() =>{
    axios.post("http://localhost:3002/newcar",formdata)
    .then((resp)=>{
      console.log(resp)
    })
    .catch((err)=>{
      console.log(err);
    })
}
  return (
    <form className="container">
      <Header />
      <div className="boxes">
        <div className="Left-Box">
          <div className="carName flex flex-dir-c m-t m-b">
            <label>CarName: </label>
            <input 
            type="text" 
            name="carname" 
            className="inp-carname" 
            onChange={HandleChange}/>
          </div>
          <div className="type&model flex j-content m-t m-b">
            <div className="type flex flex-dir-c">
              <label>Type:</label>
              <input 
              type="text" 
              name="type" 
              className="inp-type" 
              onChange={HandleChange}/>
            </div>
            <div className="model flex flex-dir-c">
              <label>Model:</label>
              <input 
              type="text" 
              name="model" 
              className="inp-model" 
              onChange={HandleChange}/>
            </div>
          </div>

          <div className="milage&perkm flex j-content m-t m-b">
            <div className="milage flex flex-dir-c m-t m-b">
              <label>Milage:</label>
              <input 
                    type="number" 
                    name="milage" 
                    className="inp-milage" 
                    onChange={HandleChange}/>
            </div>
            <div className="perkm flex flex-dir-c m-t m-b">
              <label>Per KM:</label>
              <input 
              type="number" 
              name="perkm" c
              lassName="inp-perkm" 
              onChange={HandleChange}/>
            </div>
          </div>

          <div className="availablefrom flex j-content m-t m-b">
            <div className="milage flex flex-dir-c">
              <Form>
                <Form.Group controlId="availablefrom">
                  <Form.Label>Available From:</Form.Label>
                  <Form.Control
                    type="date"
                    name="availablefrom"
                    className="inp-availabletill"
                    onChange={HandleChange}/>
                </Form.Group>
              </Form>
            </div>
            <div className="availabletill flex flex-dir-c">
            <Form>
                <Form.Group controlId="availabletill">
                  <Form.Label>Available Till:</Form.Label>
                  <Form.Control
                    type="date"
                    name="availabletill"
                    className="inp-availabletill"
                    onChange={HandleChange}/>
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="description flex flex-dir-c m-t m-b">
            <label>Description : </label>
            <input 
            type="text" 
            name="description" 
            onChange={HandleChange}/>
          </div>
        </div>

        <div className="Right-Box">
          <div className="image">
            <label>Image :</label>
            <input 
            type="file" 
            name="image"
            className="inp-img" 
            onChange={()=>{setimage(e.target.files[0])}}/>
          </div>
          <div> <Button
              variant="primary"
              className="btn-add m-l"
              onClick={HandleImage}
            >
              Add
            </Button></div>

          <div className="cardetails flex flex-dir-c">
            <label>Car Details :</label>
            <input 
            type="text" 
            name="cardetails"
            onChange={HandleChange}/>
          </div>

          <div className="details flex flex-dir-c">
            <label>Details :</label>
            <input 
            type="text" 
            name="details"
            onChange={HandleChange}/>
          </div>
        </div>
      </div>
      <div className="btns flex j-content ">
        <div className="btn-cancel ">
          <Button variant="secondary btn-cancel m-r">Cancel</Button>
        </div>
        <div className="bnt-add">
          <Button 
          variant="primary" 
          className="btn-add m-l"
          onClick={Submitdata}>
            Add
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddCar;
