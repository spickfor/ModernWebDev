import React from 'react';
import { Link } from 'react-router-dom'; // for linking pages
import './workouts.css'; // import css file
import logo from '../images/logo.jpg';
import WorkoutContent from './WorkoutContent'; // Import the child component

const WorkoutsPage = () => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    <img src={logo} className="logo" alt="Logo" />
                </Link>
                <Link to='/'>Home</Link>
                <Link to="/Workouts">Workouts</Link>
                <Link to="/Recipes">Recipes</Link>
                <Link to="/customer-support">Customer Support</Link>
            </nav>
            <h1>All Workouts</h1>

            {/* Import the child component  */}
            <WorkoutContent />
        </div>
    );
};

export default WorkoutsPage;
