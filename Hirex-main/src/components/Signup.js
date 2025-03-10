import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file
import BackButton from './BackButton'; // Import the BackButton component

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3007/register', { name, email, password })
      .then(response => {
        console.log('Registered:', response);
        alert('Registration successful!');
        navigate('/login');
      })
      .catch(error => {
        console.error('There was an error!', error);
        const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
        alert(errorMessage);
      });
  };

  return (
    <div className="signup-background">
      <BackButton /> {/* Include the BackButton component */}
      <div className="signup-frame">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already have an account? <button onClick={() => navigate('/login')} className="login-button">Login</button></p>
      </div>
    </div>
  );
};

export default Signup;