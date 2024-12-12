import { useEffect, useState } from 'react';
import React from 'react';
import './workouts.css'; // import css file
import { fetchWorkouts } from "../../Services/WorkoutsServices/workouts.services";
import WorkoutCard from './WorkoutCard'; // Import the WorkoutCard component
import WorkoutCard2 from './WorkoutCard2';
import WorkoutCard3 from './WorkoutCard3';
import WorkoutCard4 from './WorkoutCard4';
import WorkoutCard5 from './WorkoutCard5';


const WorkoutContent = () => {
    const [workouts, setWorkouts] = useState([]);  // State to hold workout data
    const [errorMessage, setErrorMessage] = useState(''); // State for errors

    const handleFetchWorkouts = async () => {
        try {
            const fetchedWorkouts = await fetchWorkouts(); // Call the service function
            setWorkouts(fetchedWorkouts); // Set the fetched issues to state
            setErrorMessage(''); // Clear any previous error message
        } catch (error) {
            setErrorMessage("There was an error fetching the issues.");
        }
    };

    // Fetch workouts on component mount
    useEffect(() => {
        handleFetchWorkouts();
    }, []);

    return (
        <div>
            {/* Error Message */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Display Workouts */}
            <div className="workout-list">
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard key={index} workout={workout} />
                    ))
                ) : (
                    <p>No workouts found.</p>
                )}
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard2 key={index} workout={workout} />
                    ))
                ) : (
                    <p>No workouts found.</p>
                )}
            </div>
            {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard3 key={index} workout={workout} />
                    ))
                ) : (
                    <p>No workouts found.</p>
                )}
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard4 key={index} workout={workout} />
                    ))
                ) : (
                    <p>No workouts found.</p>
                )}
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard5 key={index} workout={workout} />
                    ))
                ) : (
                    <p>No workouts found.</p>
                )}
        </div>
    );
};

export default WorkoutContent;
