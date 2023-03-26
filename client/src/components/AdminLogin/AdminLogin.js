import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function AdminLogin() {
    const navigate = useNavigate();
    const [formdata,setformdata]=useState({
        name:"",
        password:""
    })

    const HandleChange = (e)=>{
        const {name,value} = e.target
        setformdata({
          ...formdata,
          [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default form submission behavior

        // send a POST request to your backend API endpoint with user's email and password
        axios.post('/api/v1/user/adminlogin', {
          email: formdata.email,
          password: formdata.password
        })
        .then((response) => {
          // handle success response from server
          console.log(response.data);
          navigate('/dashbord'); // redirect user to dashboard after successful login
        })
        .catch((error) => {
          // handle error response from server
          console.error(error);
          // display error message to user
          alert('Invalid email or password. Please try again.');
        });
    };
  return (
    <div className='login flex flex-col'>
            <div className='left '>
            <div className='image'>

                <div className='line'>
                    <h1>All you needed was a wheel in Your hand and four on the road.</h1>
                </div>

                <div className='routers'>
                    <span className='register' onClick={() => navigate('/')}>
                        User sign in
                    </span>

                </div>
                </div>
                <div className='right'>
                <div className='loginform'>
                    <form onSubmit={handleSubmit} className="login-form">
                        <h5>Sign in your Admin Account</h5>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            onChange={HandleChange}
                            placeholder='Phone Number or Email'
                        />
                        <br />
                        <input
                            type="password"
                            id='password'
                            name='password'
                            onChange={HandleChange}
                            placeholder='Password'
                        />
                        <br/>
                        <a href="/" className="forgot-password-link">
                            Forgot Password?
                        </a>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
                </div>
  )
}

export default AdminLogin