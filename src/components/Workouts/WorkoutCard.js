import React from 'react';
import './WorkoutCard.css'; 

const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout-card">
            <h3>{workout.workout_name}</h3>
            <p className='date'><strong>Date Posted:</strong> {workout.date}</p>
            <p className='description'><strong>Description:</strong> {workout.description}</p>
            <p><strong>Equipment:</strong> {workout.equipment}</p>
            <p><strong>Duration:</strong> {workout.duration} minutes</p>
            <p><strong>Calories Burned:</strong> {workout.calories_burned} calories</p>
            <div className='video_container'>
                <iframe src ={workout.video}></iframe>
            </div>

        </div>
    );
};

export default WorkoutCard;