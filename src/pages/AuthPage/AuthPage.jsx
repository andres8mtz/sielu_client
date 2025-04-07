import React, { useState } from 'react';
import './AuthPage.css';
import registerImage from '../../assets/register.jpg'; // Replace with your image path

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

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
          <span 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            REGISTER
          </span>
        </div>
        {isLogin ? (
          <div id="login-form">
            <form action="/login_process" method="POST">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <div id="register-form">
            <form action="/register_process" method="POST">
              <label htmlFor="new-username">Username:</label>
              <input type="text" id="new-username" name="new-username" required />
              <label htmlFor="new-password">Password:</label>
              <input type="password" id="new-password" name="new-password" required />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;