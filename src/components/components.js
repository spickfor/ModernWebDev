// component.js
import Main from './Main/Main.js';
import CustomerSupport from './CustomerSupport/customerSupport.js';
import Workouts from './Workouts/workouts.js';
import Recipes from './Recipes/recipes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function Components() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/customer-support" element={<CustomerSupport />} />
                    <Route path="/Workouts" element={<Workouts />} />
                    <Route path="/Recipes" element={<Recipes />} />
                </Routes>
            </div>
        </Router>
    );
}