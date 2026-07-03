import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <FaExclamationTriangle className="err-icon" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved to an alternative endpoint.</p>
      <Link to="/" className="back-home-btn">Return To Home Page</Link>
    </div>
  );
};

export default NotFound;