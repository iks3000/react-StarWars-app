import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex align-items-center">
      <h3 className="mb-0 mr-4 d-flex align-items-center">
        <Link to="/react-StarWars-app/">StarDB</Link>
      </h3>
      <nav className="nav d-flex justify-content-around align-items-center">
        <Link className="nav-link bg-primary" to="/people/">People</Link>
        <Link className="nav-link bg-primary" to="/planets/">Planets</Link>
        <Link className="nav-link bg-primary" to="/starships/">Starships</Link>
      </nav>
      <button
        className="btn btn-info btn-sm shadow-none ml-5"
        onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};

export default Header;