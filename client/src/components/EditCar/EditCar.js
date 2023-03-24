import React from "react";
import Header from "../Header/Header";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../AddCar/AddCar.css";
function EditCar() {
  return (
    <form className="container">
      <Header />
      <div className="boxes">
        <div className="Left-Box">
          <div className="carName flex flex-dir-c m-t m-b">
            <label>CarName: </label>
            <input type="text" name="carname" className="inp-carname" />
          </div>
          <div className="type&model flex j-content m-t m-b">
            <div className="type flex flex-dir-c">
              <label>Type:</label>
              <input type="text" name="type" className="inp-type" />
            </div>
            <div className="model flex flex-dir-c">
              <label>Model:</label>
              <input type="text" name="model" className="inp-model" />
            </div>
          </div>

          <div className="milage&perkm flex j-content m-t m-b">
            <div className="milage flex flex-dir-c m-t m-b">
              <label>Milage:</label>
              <input type="number" name="milage" className="inp-milage" />
            </div>
            <div className="perkm flex flex-dir-c m-t m-b">
              <label>Per KM:</label>
              <input type="number" name="perkm" className="inp-perkm" />
            </div>
          </div>

          <div className="availablefrom flex j-content m-t m-b">
            <div className="milage flex flex-dir-c">
              <Form>
                <Form.Group controlId="availabletill">
                  <Form.Label>Available From:</Form.Label>
                  <Form.Control
                    type="date"
                    name="availabletill"
                    className="inp-availabletill"
                  />
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
                  />
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="description flex flex-dir-c m-t m-b">
            <label>Description : </label>
            <input type="text" name="description" />
          </div>
        </div>

        <div className="Right-Box">
          <div className="image">
            <label>Image :</label>
            <input type="file" className="inp-img" />
          </div>

          <div className="cardetails flex flex-dir-c">
            <label>Car Details :</label>
            <input type="text" />
          </div>

          <div className="details flex flex-dir-c">
            <label>Details :</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="btns flex j-content ">
        <div className="btn-cancel ">
          <Button variant="secondary btn-cancel m-r">Cancel</Button>
        </div>
        <div className="bnt-add">
          <Button variant="primary" className="btn-add m-l">
            Add
          </Button>
        </div>
      </div>
    </form>
  );
}

export default EditCar;
