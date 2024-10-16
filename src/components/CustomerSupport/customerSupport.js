import {useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './CustomerSupport.css' // import css file
import logo from '../images/logo.jpg';
import { fetchIssues } from "../../Services/CustomersupportServices/CustomerSupport.service";




const CustomerSupport = () => {
    const [issues, setIssues] = useState([]); // State to store issues
    const [errorMessage, setErrorMessage] = useState(''); // State to store error message

    // Function to handle our fetching of all the issues when button is hit
    const handleFetchIssues = async () => {
        try {
            const fetchedIssues = await fetchIssues(); // Call the service function
            setIssues(fetchedIssues); // Set the fetched issues to state
            setErrorMessage(''); // Clear any previous error message
        } catch (error) {
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
            <button onClick={handleFetchIssues}>Fetch Issues</button>

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