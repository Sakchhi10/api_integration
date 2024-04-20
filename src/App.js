import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignup from './Component/LoginSignup';
import Signup from './Component/Signup';
import Pagination from './Component/Pagination';
import Contact from './Component/Contact';
import Update from './Component/Update';
import Get from './Component/Get';
import Delete from './Component/Delete';
import Navbar from './Component/Navbar'; 

function App() {
  return (
    <div>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Pagination" element={<Pagination />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Get" element={<Get />} />
          <Route path="/Delete" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
