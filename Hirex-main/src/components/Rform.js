import React, { useState } from 'react';
import BackButton from './BackButton'; // Import the BackButton component
import './Rform.css';

const Rform = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    education: '',
    experience: '',
    email: '',
    phone: '',
    resume: null,
  });
  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example scoring logic
    let score = 0;

    if (formData.name && formData.dob && formData.education && formData.experience && formData.email && formData.phone) {
      score += 10; // +10 for complete form
    }

    if (formData.resume) {
      // Check file type and size
      if (formData.resume.type === 'application/pdf') {
        score += 20; // +20 for PDF resume
      } else {
        alert('Invalid file type. Only PDF is accepted.');
        return;
      }
    }

    // Display the score
    setScore(score);
  };

  return (
    <div className="rform-container">
      <BackButton /> {/* Include the BackButton component */}
      <div className="rform">
        <h2>Resume Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Education Qualification:</label>
            <input type="text" name="education" value={formData.education} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Work Experience (Years):</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Resume (PDF):</label>
            <input type="file" name="resume" accept="application/pdf" onChange={handleFileChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
        {score !== null && <p>Your score: {score}</p>} {/* Display the score */}
      </div>
    </div>
  );
};

export default Rform;