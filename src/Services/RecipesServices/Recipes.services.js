import Parse from "parse";

// Initialize Parse with environment variables
import * as ENV from "../../environments.js";
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


// fetches all the recipes
export const fetchRecipes = async () => {
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
      return fetchedRecipes;
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };