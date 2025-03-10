// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Import the CSS file for styling

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};

export default BackButton;