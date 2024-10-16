import {useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './workouts.css' // import css file
import logo from '../images/logo.jpg';
import { fetchWorkouts } from "../../Services/WorkoutsServices/workouts.services"

import * as ENV from "../../environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


const WorkoutsPage = () => {
    const [workouts, setWorkouts] = useState([]);  // State to hold workout data
    const [errorMessage, setErrorMessage] = useState(''); // State for errors

    const handleFetchWorkouts = async () => {
      try {
          const fetchedWorkouts = await fetchWorkouts(); // Call the service function
          setWorkouts(fetchedWorkouts); // Set the fetched issues to state
          setErrorMessage(''); // Clear any previous error message
      } catch (error) {
          setErrorMessage("There was an error fetching the issues.");
      }
    };
  
    // // Function to fetch all workouts
    // const fetchWorkouts = async () => {
    //   const Workout = Parse.Object.extend("WorkoutRoutine"); // 'WorkoutRoutine' is the table name in Back4App
    //   const query = new Parse.Query(Workout);
  
    //   try {
    //     const results = await query.find();
    //     console.log("Fetched workouts:", results);
        
    //     // Map fetched workout objects into an array of workout details
    //     const fetchedWorkouts = results.map(workout => ({
    //       date: workout.get("createdAt").toLocaleDateString(),
    //       workout_name: workout.get("routine_name"),
    //       description: workout.get("routine_description"),
    //       equipment: workout.get("routine_equipment"),
    //       duration: workout.get("duration"),
    //       calories_burned: workout.get("calories_burned")
    //     }));
    //     setWorkouts(fetchedWorkouts);  // Store workouts in state
    //   } catch (error) {
    //     console.error("Error fetching workouts:", error);
    //     setErrorMessage("There was an error fetching the workouts.");
    //   }
    // };
  
    // Fetch workouts on component mount
    useEffect(() => {
      handleFetchWorkouts();
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
        <h1>All Workouts</h1>
        
        {/* Error Message */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  
        {/* Display Workouts */}
        <ul>
          {workouts.length > 0 ? (
            workouts.map((workout, index) => (
              <li key={index}>
                <strong>Date:</strong> {workout.date} <br />
                <strong>Workout:</strong> {workout.workout_name} <br />
                <strong>Description:</strong> {workout.description} <br />
                <strong>Equipment:</strong> {workout.equipment} <br />
                <strong>Duration:</strong> {workout.duration} minutes <br />
                <strong>Calories Burned:</strong> {workout.calories_burned} calories <br />
                <hr />
              </li>
            ))
          ) : (
            <p>No workouts found.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default WorkoutsPage;