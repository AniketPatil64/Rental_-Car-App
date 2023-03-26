import React, { useState } from 'react';
import { Data } from '../data/Data.js';
import { Button, ButtonGroup } from 'react-bootstrap';
import './Adminpage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';

function AdminPage() {
  const [cardetails,setcardetails] = useState(false);
   const navigate = useNavigate();
   const EditCarDetailPage =()=>{
    navigate("/editcar")
    setcardetails(true)
   }
  return (
    <>
      <div className="container">
      {/* <Header/> */}
      <h1 className='Hello'>Hello Admin ...</h1>
      <button>add</button>
      <div className='Headerbar'>
      <h4>Cars</h4>
        <Button 
        variant="primary" 
        className='btn'
        onClick={()=>{navigate("/addcar")}}>Add Cars</Button>
      </div>
        <div className="card-container">
          {Data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img} 
              alt={item.name}
              onClick={()=>{EditCarDetailPage()}}
              />
              <p className='seat'>{item.seater} Persons</p>
              <div className="card-details">
                <h3>{item.name}</h3>
                <p className='RSKM'>{item.rateperkm}Rs/Km</p>
              </div>
              <div>
                <p className='available'>available date : {item['available Date']}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
