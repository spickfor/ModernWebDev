import { useEffect, useState } from "react";
import React from 'react';
import { fetchRecipes } from "../../Services/RecipesServices/Recipes.services"; // Service function to fetch recipes
import './recipes.css'; // Import the css file



const RecipesContent = () => {
  const [recipes, setRecipes] = useState([]);  // State to hold recipe data
  const [errorMessage, setErrorMessage] = useState(''); // State for errors
  
  const handleFetchRecipes = async () => {
    try {
      const fetchedRecipes = await fetchRecipes(); // Call the service function
      setRecipes(fetchedRecipes); // Set the fetched recipes to state
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      setErrorMessage("There was an error fetching the recipes.");
    }
  };

  // Fetch recipes on component mount
  useEffect(() => {
    handleFetchRecipes();
  }, []);
  
  return (
    <div>
      {/* Error Message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Display Recipes */}
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

export default RecipesContent;
