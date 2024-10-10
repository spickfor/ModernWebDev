import logo from './logo.svg';
import './App.css';
import Main from './Main/Main.js';
import CustomerSupport from './CustomerSupport/customerSupport.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ENV from "./environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;



function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>

  <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            
        </Routes>
    </div>
  </Router>
  );

};

export default App;
