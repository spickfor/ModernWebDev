import {useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './CustomerSupport.css' // import cs file
import logo from '../images/logo.jpg';


import * as ENV from "../environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


const CustomerSupport = () => {
    const [issues, setIssues] = useState([]); // State to store issues
    const [errorMessage, setErrorMessage] = useState(''); // State to store error message

    // Function to fetch issues from the database
    const fetchIssues = async () => {
        const Issue = Parse.Object.extend("CustomerSupport"); // "Issues" is the class name in Back4App
        const query = new Parse.Query(Issue);
        
        try {
            const results = await query.find();
            console.log("Results fetched:", results);
            const fetchedIssues = results.map(issue => ({
                name: issue.get("name"), // Change to 'name'
                description: issue.get("description"),
                status: issue.get("status") // Add status to fetched data
            }));
            console.log("Fetched issues:", fetchedIssues);
            setIssues(fetchedIssues); // Set the fetched issues to state
            setErrorMessage(''); // Clear any previous error message
        } catch (error) {
            console.error("Error fetching issues:", error);
            setErrorMessage("There was an error fetching the issues.");
        }
    };

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

            <h1>Customer Support</h1>
            <button onClick={fetchIssues}>Fetch Issues</button>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            
            <ul>
                {issues.map((issue, index) => (
                    <li key={index}>
                        <strong>{issue.name}</strong>: {issue.description} <em>(Status: {issue.status})</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerSupport;