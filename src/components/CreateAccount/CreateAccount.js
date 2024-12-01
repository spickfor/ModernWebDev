import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Parse from 'parse';
import './CreateAccount.css';  // Optional: You can add styles for this page

const CreateAccount = () => {
  // State hooks to store input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Hook to navigate to other pages

  // Handle the form submission
  const handleCreateAccount = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Check if both username and password are entered
    if (!username || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    try {
      // Create a new Parse user with the entered credentials
      const user = new Parse.User();
      user.set('username', username);
      user.set('password', password);

      // Sign up the new user in Parse
      await user.signUp();

      // If successful, redirect to the login page
      navigate('/login');
    } catch (error) {
      // Catch any errors and display them
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="create-account-container">
      <h2>Create New Account</h2>

      {/* Display any error message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Form for user input */}
      <form onSubmit={handleCreateAccount}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>

      {/* Link to go back to the login page */}
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default CreateAccount;
