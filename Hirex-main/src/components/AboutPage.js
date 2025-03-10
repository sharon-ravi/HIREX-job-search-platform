import React from 'react';
import BackButton from './BackButton'; // Import the BackButton component
import './AboutPage.css'; // Import the CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <BackButton /> {/* Include the BackButton component */}
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to HireX! We are dedicated to connecting talented individuals with their dream jobs.
          Our mission is to provide a seamless job search experience and support both job seekers and employers.
          With our innovative platform, we aim to make hiring and job searching more efficient and effective.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;