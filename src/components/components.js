import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main/Main.js';  // Your main page
import Login from './Login/Login';  // Your login page
import CreateAccount from './CreateAccount/CreateAccount';  // Your create account page
import Workouts from './Workouts/workouts.js';  // Your workouts page
import Recipes from './Recipes/recipes.js';  // Your recipes page
import CustomerSupport from './CustomerSupport/customerSupport.js';  // Your customer support page
import { useEffect, useState } from 'react';
import Parse from 'parse';
import Chatbot from './Chatbot';  // Import the Chatbot component

// ProtectedRoute component that only allows access if user is logged in
function ProtectedRoute({ element }) {
  const currentUser = Parse.User.current();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return element;
}

export default function Components() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track if user is logged in

  useEffect(() => {
    // Check if the user is logged in when the app starts
    const currentUser = Parse.User.current();
    if (currentUser) {
      setIsLoggedIn(true);  // Set logged in state
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to the Main page, protected by login */}
          <Route path="/" element={isLoggedIn ? <ProtectedRoute element={<Main />} /> : <Navigate to="/login" />} />

          {/* Add protection for other pages like Workouts, Recipes, and Customer Support */}
          <Route path="/workouts" element={isLoggedIn ? <ProtectedRoute element={<Workouts />} /> : <Navigate to="/login" />} />
          <Route path="/recipes" element={isLoggedIn ? <ProtectedRoute element={<Recipes />} /> : <Navigate to="/login" />} />
          <Route path="/customer-support" element={isLoggedIn ? <ProtectedRoute element={<CustomerSupport />} /> : <Navigate to="/login" />} />

          {/* Login and Create Account pages are not protected */}
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />

          {/* Dedicated route for the Chatbot */}
          <Route path="/chatbot" element={isLoggedIn ? <ProtectedRoute element={<Chatbot />} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}
