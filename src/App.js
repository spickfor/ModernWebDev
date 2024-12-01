import './App.css';
import Main from './components/Main/Main.js';
import Components from './components/components.js';
import CustomerSupport from './components/CustomerSupport/customerSupport.js';
import Workouts from './components/Workouts/workouts.js';
import Recipes from './components/Recipes/recipes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ENV from "./environments.js";
import Parse from "parse";
import Login from './auth/components/Login';
import Register from './auth/components/Register';
import ProtectedRoute from './auth/services/protectedRoute';
import { AuthProvider } from './auth/AuthProvider';

// Initialize Parse with environment variables
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Components />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/customer-support" 
              element={
                <ProtectedRoute>
                  <CustomerSupport />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/workouts" 
              element={
                <ProtectedRoute>
                  <Workouts />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/recipes" 
              element={
                <ProtectedRoute>
                  <Recipes />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
