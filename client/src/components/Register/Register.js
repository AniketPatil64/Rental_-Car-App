import React, { useState } from "react";
import "./Register.css";
import Back from '../Image/Back.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Register() {
  const JWT_SECRET='createwebforcarrentapplicationusingmernstack'
  const [formdata,setformdata]= useState({
      name:"",
      email:"",
      contact:"",
      password:"",
      confirmPassword:""
  })

  const HandleChange = (e)=>{
    const {name,value} = e.target
    setformdata({
      ...formdata,
      [name]:value
    })
  }

  //for navigate we will use
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
        //console.log(input);
        
        try{
          
          const {data}=await axios.post('/api/v1/user/register',
          {username:formdata.name,email:formdata.email,contact:formdata.contact,password:formdata.password,confirmPassword:formdata.confirmPassword});
          if(data.sucess){
            alert.success('User Register Sucessfully');
            navigate('/login');
          }
        }catch(err){
            console.log(err);
        }
    
  };

  return (

    <div className='image'>
                <img src={Back} alt="Background Image" />
                <div className='line'>
                    <h1>All you needed was a wheel in Your hand and four on the road.</h1>
                </div>

    <div className="registerform">
    <form onSubmit={handleSubmit} className="registration-form">
    <h5>Register in your Account</h5>
        <input
          type="text"
          name="name"
          onChange={HandleChange}
          placeholder='Name'
        />


       <br/>

        <input
          type="email"
          email="email"
          onChange={HandleChange}
          placeholder='email'
        />


      <br/>

        <input
          type="text"
          contact="contact"
          onChange={HandleChange}
          placeholder='contact'
        />


      <br/>

        <input
          type="password"
          password="password"
          onChange={HandleChange}
          placeholder='password'
        />


      <br/>

        <input
          type="password"
          confirmPassword="confirmPassword"
          onChange={HandleChange}
          placeholder='confirm password'
        />


      <br/>
      <div>
         <a href="/" onClick={() => navigate('/login')}>Register</a>
      </div>
      <div>
      <button type="submit">Register</button>
      </div>

    </form>
    </div>
    </div>
  );
}

export default Register;
