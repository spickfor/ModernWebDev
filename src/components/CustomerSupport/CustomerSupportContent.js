import { useState } from "react";
import React from 'react';
import './CustomerSupport.css'; // import css file
import { fetchIssues } from "../../Services/CustomersupportServices/CustomerSupport.service";
import SupportIssueCard from "./SupportIssueCard"; // Import the card component

const CustomerSupportContent = () => {
  const [issues, setIssues] = useState([]); // State to store issues
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const [isFetched, setIsFetched] = useState(false); // State to control when issues are fetched

  // Function to fetch the issues when button is clicked
  const handleFetchIssues = async () => {
    try {
      const fetchedIssues = await fetchIssues(); // Call the service function
      setIssues(fetchedIssues); // Set the fetched issues to state
      setErrorMessage(''); // Clear any previous error message
      setIsFetched(true); // Set to true to indicate that issues have been fetched
    } catch (error) {
      setErrorMessage("There was an error fetching the issues.");
      setIsFetched(true); // Even if there's an error, we indicate that the fetch attempt occurred
    }
  };

  return (
    <div>
      <button onClick={handleFetchIssues}>Fetch Issues</button>

      {/* Error Message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Display Support Issues only after the button is clicked */}
      {isFetched && (
        <div className="issues-container">
          {issues.length > 0 ? (
            issues.map((issue, index) => (
              <SupportIssueCard key={index} issue={issue} />
            ))
          ) : (
            <p>No issues found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomerSupportContent;
