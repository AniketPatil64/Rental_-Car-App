import React, { useState } from "react";
import "./Register.css";
import Back from '../Image/Back.png'
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Contact: ${contact}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // Here you would handle submitting the data to your server or performing any other necessary action
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
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='Name'
        />

       
       <br/>

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='email'
        />


      <br/>

        <input
          type="text"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder='contact'
        />


      <br/>

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='password'
        />


      <br/>

        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder='confirm password'
        />


      <br/>
      <div>
         <a href="/" onClick={() => navigate('/register')}>Sign In</a>
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


