import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Component/Assets/person.png';
import email_icon from '../Component/Assets/email.png';
import password_icon from '../Component/Assets/password.png';
import { Link } from 'react-router-dom';

const LoginSignup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, email, password };
    console.log(newItem);
  };
  
  return (
    <div className='container'>
      <div className='header'>
        <div className="text ">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
        <div className="input ">
          <img src={user_icon} alt=""/>
          <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} placeholder="Name"/>
        </div>
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}placeholder="Email Id"/>
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <br />
        </div>
        <button onClick={handleSubmit} className='submit-container btn btn-primary'>
          <Link to ="/Signup" className='submit'>Sign Up</Link>
        </button>
        <button onClick={handleSubmit} className='submit-container btn btn-warning'>
          <Link to ="/Pagination" className='submit'>Pagination</Link>
        </button>
        {/* <button onClick={handleSubmit} className='submit-container btn btn-danger'>
          <Link to ="/Registration" className='submit'>RegistrationForm</Link>
        </button> */}
      </div>
      {/* <div className="forgot-password">
        Already have an account? <span><Link to="/Signup">Sign In</Link></span>
      </div> */}
    </div>
  );
}

export default LoginSignup;