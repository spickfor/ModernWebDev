// App.js
import './App.css';
import Main from './components/Main/Main.js';
import Components from './components/components.js'
import CustomerSupport from './components/CustomerSupport/customerSupport.js';
import Workouts from './components/Workouts/workouts.js';
import Recipes from './components/Recipes/recipes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ENV from "./environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;



function App() {
  return (
    <Components />
    // <Router>
    //   <div className="App">
    //       <Routes>
    //           <Route path="/" element={<Main />} />
    //           <Route path="/customer-support" element={<CustomerSupport />} />
    //           <Route path="/Workouts" element={<Workouts />}/>
    //           <Route path="/Recipes" element={<Recipes />}/>
    //       </Routes>
    //   </div>
    // </Router>

  );

};

export default App;
