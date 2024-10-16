import {useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './recipes.css' // import css file
import logo from '../images/logo.jpg';
import { fetchRecipes } from "../../Services/RecipesServices/Recipes.services";

import * as ENV from "../../environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);  // State to hold recipe data
    const [errorMessage, setErrorMessage] = useState(''); // State for errors
  
    const handleFetchRecipes = async () => {
      try {
          const fetchedWorkouts = await fetchRecipes(); // Call the service function
          setRecipes(fetchedWorkouts); // Set the fetched issues to state
          setErrorMessage(''); // Clear any previous error message
      } catch (error) {
          setErrorMessage("There was an error fetching the issues.");
      }
    };

  
    // Fetch recipe on component mount
    useEffect(() => {
      handleFetchRecipes();
    }, []);
  
    return (

      <div>
        <nav>
            <Link to='/'>
                <img src = {logo} className="logo"/>
            </Link>
            <Link to='/'>Home</Link>
            <Link to="/Workouts">Workouts</Link>
            <Link to="/Recipes">Recipes</Link>
            <Link to="/customer-support">Customer Support</Link>
        </nav>
        <h1>All Recipes</h1>
        
        {/* Error Message */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  
        {/* Display recipes */}
        <ul>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <li key={index}>
                <strong>Date:</strong> {recipe.date} <br />
                <strong>Item:</strong> {recipe.recipe_title} <br />
                <strong>Ingredients:</strong> {recipe.ingredients} <br />
                <strong>Instructions:</strong> {recipe.instructions} <br />
                <hr />
              </li>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default RecipesPage;