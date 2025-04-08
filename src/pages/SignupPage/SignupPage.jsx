import React, { useState } from 'react';
import './SignupPage.css';
import registerImage from '../../assets/register.jpg'; // Replace with your image path
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios'; // Import axios for making HTTP requests

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };
 
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
  )
};



export default SignupPage;