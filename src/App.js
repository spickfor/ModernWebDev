// import logo from './images/logo.jpg';
import './App.css';
import Main from './Main/Main.js';
import CustomerSupport from './CustomerSupport/customerSupport.js'
import Workouts from './Workouts/workouts.js'
import Recipes from './Recipes/recipes.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ENV from "./environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;



function App() {
  return (

  <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/Workouts" element={<Workouts />}/>
            <Route path="/Recipes" element={<Recipes />}/>
        </Routes>
    </div>
  </Router>
  );

};

export default App;
