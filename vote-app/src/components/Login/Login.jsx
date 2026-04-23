import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import './Login.css';

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="container d-flex justify-content-center align-items-center vh-100 w-100 h-100">

        <div className='card shadow login-card'>

            <LoginHeader/>

            <LoginForm/>


        </div>

    </div>
    
    </>
  )
}

export default Login