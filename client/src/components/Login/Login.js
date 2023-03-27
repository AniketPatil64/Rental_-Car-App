import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import {useDispatch} from 'react-redux'
import './Login.css'
//import Back from '../Image/Back.png'
import axios from 'axios'

function Login() {
    const token = process.env.REACT_APP_MY_TOKEN;

    const navigate = useNavigate();
    // const [formdata,setformdata]=useState({
    //     name:"",
    //     password:""
    // })

    // const HandleChange = (e)=>{
    //     const {name,value} = e.target
    //     setformdata({
    //       ...formdata,
    //       [name]:value
    //     })
    //   }

    //   const handleSubmit = (e)=>{
    //     e.preventDefault(); // prevent default form submission behavior

    //     // send a POST request to your backend API endpoint with user's email and password
    //     axios.post('/api/v1/user/login', {
    //       email: formdata.email,
    //       password: formdata.password
    //     })
    //     .then((response) => {
    //       // handle success response from server
    //       console.log(response.data);
    //       navigate('/dashboard'); // redirect user to dashboard after successful login
    //     })
    //     .catch((error) => {
    //       // handle error response from server
    //       console.error(error);
    //       // display error message to user
    //       alert('Invalid email or password. Please try again.');
    //     });
     // }

     const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const { data } = await axios.post("/api/v1/user/login", formData);
          localStorage.setItem(`${token}`, data.token);
          alert("User logged in successfully!");
        } catch (error) {
          console.error(error);
          alert("Failed to log in user.");
        }
      };
    
      const HandleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }
    return (
        <div className='login flex flex-col'>
            <div className='left '>
            <div className='image'>

                <div className='line'>
                    <h1>All you needed was a wheel in Your hand and four on the road.</h1>
                </div>

                <div className='routers'>
                    <span className='register' onClick={() => navigate('/register')}>
                        Register
                    </span>
                    <span className='adminlogin' onClick={() => navigate('/adminlogin')}>
                        AdminLogin
                    </span>
                </div>
                </div>
                <div className='right'>
                <div className='loginform'>
                    <form onSubmit={handleSubmit} className="login-form">
                        <h5>Sign in your Account</h5>
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

export default Login

