import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/Pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Update">Update</Link>
        </li>
        <li>
          <Link to="/Get">Get</Link>
        </li>
        <li>
          <Link to="/Delete">Delete</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
