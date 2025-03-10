/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert(`Welcome, ${name}`); // Corrected syntax here
          navigate('/user-form'); // Navigate to the UserForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;*/


/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert(`Welcome, ${name}`); // Corrected syntax here
          navigate('/resume-form'); // Navigate to the ResumeForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;*/

/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import a CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert('Welcome, ${name}'); // Corrected syntax here
          navigate('/resume-form'); // Navigate to the ResumeForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate('/job-lists')}>Job Lists</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;*/

/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import a CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert('Welcome, ${name}'); // Corrected syntax here
          navigate('/resume-form'); // Navigate to the ResumeForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate('/job-lists')}>Job Lists</button>
        </form>
        <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default Login;
*/
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure this CSS file exists for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert('Welcome, ${name}'); // Corrected syntax for template literals
          navigate('/resume-form'); // Navigate to the ResumeForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate('/job-lists')}>Job Lists</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
*/

/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure this CSS file exists for styling

// Define the JobListingButton component
const JobListingButton = () => {
  const handleClick = () => {
    // Replace with the URL where your job-board-app is hosted
    window.open('http://localhost:3000', '_blank');
  };

  return (
    <button onClick={handleClick}>
      Job Listings
    </button>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert('Welcome, ${name}'); // Corrected syntax for template literals
          navigate('/resume-form'); // Navigate to the ResumeForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <JobListingButton /> {/* Add JobListingButton here */
        /*</form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import a CSS file for styling
import BackButton from './BackButton'; // Import the BackButton component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3007/login', { email, password })
      .then(response => {
        if (response.data.status === "Success") {
          const name = response.data.name || 'User'; // Default to 'User' if name is undefined
          alert('Welcome, ${name}'); // Corrected syntax here
          navigate('/resume-form'); // Navigate to the ResumeForm component
        } else {
          alert(response.data.message);  // Display error messages like 'incorrect password' or 'no record found'
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="login-container">
      <BackButton /> {/* Include the BackButton component */}
      <div className="login-frame">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default Login;