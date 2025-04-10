import React, { useState } from 'react';
import './SignupPage.css';
import registerImage from '../../assets/register.jpg'; // Replace with your image path
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios'; // Import axios for making HTTP requests

const API_URL = "https://sielu-backend.onrender.com";

function SignupPage(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, firstName, lastName };
 
    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  }; 
  
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
            <form action="/register_process" onSubmit={handleSignupSubmit} method="POST">
              <label htmlFor="new-firstname">First name:</label>
              <input type="text" name="new-first_name" value={firstName} id="new-firstname" onChange={handleFirstName} required />
              <label htmlFor="new-lastname">Last name:</label>
              <input type="text" name="new-lastname" value={lastName} id="new-lastname" onChange={handleLastName} required />
              <label htmlFor="new-email">Email:</label>
              <input type="email" name="new-email" value={email} id="new-email" onChange={handleEmail} required />
              <label htmlFor="new-password">Password:</label>
              <input type="password" name="new-password" value={password} id="new-password" onChange={handlePassword} required />
              <button type="submit">Register</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
      </div>
    </div>
  )
};



export default SignupPage;