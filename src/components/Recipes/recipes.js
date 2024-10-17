import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './recipes.css'; // import css file
import logo from '../images/logo.jpg';
import RecipesContent from './RecipesContent'; // Import the child component

const RecipesPage = () => {
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
      <h1>All Recipes</h1>
      
      {/* Import the child component which contains the recipes */}
      <RecipesContent />
    </div>
  );
};

export default RecipesPage;
