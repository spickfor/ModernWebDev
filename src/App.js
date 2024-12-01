import './App.css';
import Components from './components/components.js';  // Ensure you're using Components properly
import Parse from 'parse';
import * as ENV from "./environments.js";

// Initialize Parse with environment variables
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

function App() {
  return (
    <Components />
  );
}

export default App;