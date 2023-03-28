import React, { useState } from 'react'
import "./MyBooking.css";
import {Button} from 'react-bootstrap'
import EditBookingDetails from '../EditBookingDetails/EditBookDetail';

const MyBooking = (BookedCar) => {
  const [editpage,seteditpage] = useState(false)
    console.log(BookedCar)
    const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
    const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      {
        !editpage &&
        <div className='my-box'>

<div className='div-1'>

  <div className='one-div'>
    <img src={BookedCar.BookedCar.singlecar.image} alt='photu' />
  </div>

  <div className='two-div'>
    <h2>{BookedCar.BookedCar.singlecar.carname}</h2>
    <h5> MH 03 ZQ 1234</h5>
    <p className='cardetails'>car details</p>
    <p className='cardetails'>car details</p>

  </div>

  <div className='three-div'>

    <div className='mini-3rd-div'>

      <div>
        <p>Origin :</p>
        <p>Destination :</p>
        <p>Start Date :</p>
        <p>End Date :</p>
      </div>

      <div>
        <p>Banglore</p>
        <p>Mysore</p>
        <p>16-June-2019</p>
        <p>17-June-2019</p>
      </div>

      <div className='mini-3rd-div-img'>
        <img src="hello" alt='hello'/>
      </div>

    </div>

  </div>

  <div className='four-div'>
    <div className='mini-four-div'>

      <div>
        <p>{BookedCar.BookedCar.singlecar.id}</p>
        <p>{currentDate}</p>
        <p>{currentTime}</p>

      </div>
      <div>
        <p>GOTSEB </p>
        <p>19-APRIL-2023</p>
        <p>8:00 PM</p>

      </div>

    </div>
  </div>

  <div className='five-div'>
  <Button  variant='primary' className='edit-btn' onClick={()=>{seteditpage(true)}}>Edit</Button>
    <Button variant='secondary' className='can-btn' onClick={()=>{window.location.reload()}}>Cancel</Button>
  </div>
 </div>
</div>
      }

      {
        editpage && 
        <EditBookingDetails editBookedcar={BookedCar}/>
      }
    </>
  )
}

export default MyBooking