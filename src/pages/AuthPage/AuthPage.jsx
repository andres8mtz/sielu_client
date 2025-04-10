import React, { useState, useContext } from 'react';
import './AuthPage.css';
import registerImage from '../../assets/register.jpg'; // Replace with your image path
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AuthContext } from "../../context/auth.context";

const AuthPage = () => {


  const [isLogin, setIsLogin] = useState(true);
  const { isLoggedIn, user } = useContext(AuthContext); // <== ADD



  return (
    <div className="container">
      <div className="image-section">
        <img src={registerImage} alt="Auth Image" />
      </div>
      <div className="form-section">
        <div className="toggle-buttons">
          <span 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </span>
          <Link to="/account/signup">
          <span 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            
            REGISTER
          </span>
          </Link>
        </div>
          <div id="login-form">
            <form action="/login_process" method="POST">
              <label htmlFor="username">Email:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Login</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default AuthPage;