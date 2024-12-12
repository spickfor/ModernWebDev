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
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/uLVt6u15L98?si=E6FEkFaOXuRD6TDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
        </div>
    );
};

export default WorkoutCard;
