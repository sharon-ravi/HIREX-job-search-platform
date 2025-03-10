/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserForm from './components/UserForm'; // Import the UserForm component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />*/
         // <Route path="/user-form" element={<UserForm />} /> {/* Add this route */}
       /* </Routes>
      </div>
    </Router>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Rform from './components/Rform';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resume-form" element={<Rform />} />
      </Routes>
    </Router>
  );
};

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import JobList from 'my-shared-library/components/JobList';
import Login from './components/Login';
import Signup from './components/Signup';
import Rform from './components/Rform'; // Import your ResumeForm component
//import JobList from './JobList'; // Import your JobLists component

/*const App = () => {
  return (
    <Router>
      <Routes>*/
        //<Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        //<Route path="/login" element={<Login />} />
        /*<Route path="/signup" element={<Signup />} />
        <Route path="/resume-form" element={<Rform />} />
        {/* Add any other routes here */
     // </Routes>
    //</Router>
 // );
//};

//export default App;*/


// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntryPage from './components/EntryPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Rform from './components/Rform';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume-form" element={<Rform />} />
      </Routes>
    </Router>
  );
};

export default App;