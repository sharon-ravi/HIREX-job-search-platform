// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    education: '',
    experience: '',
    email: '',
    phone: '',
    resume: null,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('dob', formData.dob);
    data.append('education', formData.education);
    data.append('experience', formData.experience);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);

    try {
      const response = await axios.post('http://localhost:3007/submit-user-details', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Submission successful:', response.data);
    } catch (error) {
      console.error('There was an error!', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>Education Qualification:</label>
          <input type="text" name="education" value={formData.education} onChange={handleChange} required />
        </div>
        <div>
          <label>Work Experience (Years):</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Resume (PDF):</label>
          <input type="file" name="resume" accept="application/pdf" onChange={handleFileChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;