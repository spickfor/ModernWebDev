import React from 'react';
import './WorkoutCard.css'; 

const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout-card">
            <h3>Stair Master</h3>
            <p className='date'><strong>Date Posted: 12/11/2024</strong></p>
            <p><strong> Description: </strong> You will use the stair machine at level 10 to burn calories</p>
            <p><strong>Equipment:</strong> stair machine </p>
            <p><strong>Duration:</strong> 30 mins</p>
            <p><strong>Calories Burned:</strong> about 500</p>
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/V2EQYdMw4Do?si=Q7ouktzQklHFhtIr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
            </div>
    );
};

export default WorkoutCard;