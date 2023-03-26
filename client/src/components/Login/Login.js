import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import Back from '../Image/Back.png'

function Login() {
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

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
                            value={emailOrPhone}
                            onChange={(event) => setEmailOrPhone(event.target.value)}
                            placeholder='Phone Number or Email'
                        />
                        <br />
                        <input
                            type="password"
                            id='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
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
