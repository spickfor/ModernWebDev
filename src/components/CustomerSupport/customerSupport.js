import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './CustomerSupport.css'; // import css file
import logo from '../images/logo.jpg';
import CustomerSupportContent from './CustomerSupportContent'; // Import the child component

const CustomerSupport = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Link to='/'>Home</Link>
        <Link to="/Workouts">Workouts</Link>
        <Link to="/Recipes">Recipes</Link>
        <Link to="/customer-support">Customer Support</Link>
      </nav>
      <h1>Customer Support</h1>

      {/* Import the child component which contains the support issues */}
      <CustomerSupportContent />
    </div>
  );
};

export default CustomerSupport;
