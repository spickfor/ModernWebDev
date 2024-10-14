import {useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './recipes.css' // import css file
import logo from '../images/logo.jpg';

import * as ENV from "../environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);  // State to hold recipe data
    const [errorMessage, setErrorMessage] = useState(''); // State for errors
  
    // Function to fetch all recipes
    const fetchRecipes = async () => {
      const Recipe = Parse.Object.extend("Recipes"); // 'Reciipes' is the table name in Back4App
      const query = new Parse.Query(Recipe);
  
      try {
        const results = await query.find();
        console.log("Fetched recipes:", results);
        
        // Map fetched recipe objects into an array of recipe details
        const fetchedRecipes = results.map(recipe => ({
          date: recipe.get("createdAt").toLocaleDateString(),
          recipe_title: recipe.get("title"),
          ingredients: recipe.get("ingredients"),
          instructions: recipe.get("instructions")
        }));
        setRecipes(fetchedRecipes);  // Store recipes in state
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setErrorMessage("There was an error fetching the recipes.");
      }
    };
  
    // Fetch recipe on component mount
    useEffect(() => {
      fetchRecipes();
    }, []);
  
    return (

      <div>
        <nav>
            <Link to='/'>
                <img src = {logo} className="logo"/>
            </Link>
            <Link to='/'>Home</Link>
            <Link to="/Workouts">Workouts</Link>
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