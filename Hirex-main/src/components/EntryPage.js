import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EntryPage.css'; // Import the CSS file for styling

const EntryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="entry-page">
      <div className="overlay">
        <h1>Welcome to HireX</h1>
        <div className="button-group">
          <button onClick={() => navigate('/login')} className="nav-button">Login</button>
          <button onClick={() => navigate('/about')} className="nav-button">About Us</button>
          <button onClick={() => navigate('/contact')} className="nav-button">Contact Us</button>
     
        </div>
      </div>
    </div>
  );
};

export default EntryPage;