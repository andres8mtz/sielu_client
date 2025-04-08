import React, { useState } from 'react';
import './SignupPage.css';
import registerImage from '../../assets/register.jpg'; // Replace with your image path
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="image-section">
        <img src={registerImage} alt="Auth Image" />
      </div>
      <div className="form-section">
        <div className="toggle-buttons">
        <Link to="/account/login">
          
          <span 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            LOGIN
          </span>
          </Link>
          <span 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            REGISTER
          </span>
        </div>
       
          <div id="register-form">
            <form action="/register_process" method="POST">
            <label htmlFor="new-firstname">First name:</label>
              <input type="text" id="new-firstname" name="new-firstname" required />
              <label htmlFor="new-lastname">Last name:</label>
              <input type="text" id="new-lastname" name="new-lastname" required />
              <label htmlFor="new-username">Username:</label>
              <input type="text" id="new-username" name="new-username" required />
              <label htmlFor="new-password">Password:</label>
              <input type="password" id="new-password" name="new-password" required />
              <button type="submit">Register</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default SignupPage;