import React from 'react'
import "./CarBooking.css"
// import {useNavigate} from 'react-router-dom'
function CarBooking() {
   
   
    
   return (
        <div>
            <div className='total'>
                <div className='header'>
                    <div className='logo'>LOGO</div>

                    <div className='nav'>
                        <span className='bookings' >My Bookings</span>
                        <span className='logout'>Logout</span>
                    </div>
                </div>
                <div>
                    <div className='home'>
                        <div className='text'><h1>Main quote for the Website will be Placed here to make understand</h1> </div>
                           <form>
                           
                            <input className='startdate' placeholder="startdate" type='date' />
                        
                            <input className='enddate' placeholder="enddate" type='date' />
                        
                       
                        <input className='origin' placeholder="origin" type='text' />
                        <input className='destination' placeholder="destination" type='text' />
                       
                        </form>
                          
                        <button className='button'>Check</button>


                    </div>
                </div>
                
            </div>

         </div>  
         )
}
export default CarBooking