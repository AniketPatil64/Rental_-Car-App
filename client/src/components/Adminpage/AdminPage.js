import React, { useEffect, useState } from 'react';
import { Data } from '../data/Data.js';
import { Button } from 'react-bootstrap';
import './Adminpage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export function MainId(idd) {
  return idd;
}
function AdminPage() {
  const [cardetails,setcardetails] = useState(false);
  const [data,setdata] = useState([])
  const [id,setid] = useState("")
   const navigate = useNavigate();

   const EditCarDetailPage =(ID)=>{
    MainId(ID)
    navigate(`/editcar/:${ID}`)
   }
   useEffect(()=>{
    axios.get("http://localhost:3030/api/v1/user/adminpage")
    .then((resp)=>{
      setdata(resp.data)
      console.log(data)
    })
  },[data.length])
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
        className='btn1'
        onClick={()=>{navigate("/addcar")}}>Add Cars</Button>
      </div>
        <div className="card-container">
          {Data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img} 
              alt={item.name}
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
          {data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} 
              alt={item.name}
              onClick={()=>{EditCarDetailPage(item._id)}}
              />
              <p className='seat'>5 Persons</p>
              <div className="card-details">
                <h3>{item.carname}</h3>
                <p className='RSKM'>{item.milage}Rs/Km</p>
              </div>
              <div>
                <p className='available'>available date : {item.availablefrom}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
