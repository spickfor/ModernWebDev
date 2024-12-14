import { useEffect, useState } from 'react';
import React from 'react';
import './workouts.css'; // import css file
import { fetchWorkouts, createWorkout } from "../../Services/WorkoutsServices/workouts.services";
import WorkoutCard from './WorkoutCard'; // Import the WorkoutCard component

const WorkoutContent = () => {
    const [workouts, setWorkouts] = useState([]);  // State to hold workout data
    const [errorMessage, setErrorMessage] = useState(''); // State for errors
    const [showForm, setShowForm] = useState(false); // Toggle form visibility
    const [newWorkout, setNewWorkout] = useState({
        workout_name: '',
        description: '',
        equipment: '',
        duration: '',
        calories_burned: '',
        video: '',
    });

    const handleFetchWorkouts = async () => {
        try {
            const fetchedWorkouts = await fetchWorkouts(); // Call the service function
            console.log("Fetched Workouts:", fetchedWorkouts) // logging fetched workouts
            setWorkouts(fetchedWorkouts); // Set the fetched issues to state
            setErrorMessage(''); // Clear any previous error message
        } catch (error) {
            setErrorMessage("There was an error fetching the issues.");
        }
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await createWorkout(newWorkout); // Send new workout to backend
            setNewWorkout({
                workout_name: '',
                description: '',
                equipment: '',
                duration: '',
                calories_burned: '',
                video: '',
            });
            setShowForm(false); // Hide form after submission
            handleFetchWorkouts(); // Refresh workouts
        } catch (error) {
            console.error("Error creating workout:", error);
            setErrorMessage("There was an error creating the workout.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewWorkout((prev) => ({ ...prev, [name]: value }));
    };


    useEffect(() => {
        handleFetchWorkouts(); // Initial fetch

        // Poll every 10 seconds
        const interval = setInterval(() => {
            handleFetchWorkouts();
        }, 10000); // Fetch every 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    return (
        <div>
            {/* Error Message */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* New Post Button */}
            <button className="new-post-button" onClick={() => setShowForm((prev) => !prev)}>
                New Post
            </button>

            {/* New Post Form */}
            {showForm && (
                <form className="new-post-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="workout_name"
                        placeholder="Workout Name"
                        value={newWorkout.workout_name}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newWorkout.description}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="equipment"
                        placeholder="Equipment"
                        value={newWorkout.equipment}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="duration"
                        placeholder="Duration (minutes)"
                        value={newWorkout.duration}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="calories_burned"
                        placeholder="Calories Burned"
                        value={newWorkout.calories_burned}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="url"
                        name="video"
                        placeholder="Video URL"
                        value={newWorkout.video}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}

            {/* Display Workouts */}
            <div className="workout-list">
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard key={index} workout={workout} />
                    ))
                ) : (
                    <p>No workouts found.</p>
                )}
            </div>
        </div>
    );
};

export default WorkoutContent;
