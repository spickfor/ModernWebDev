import React from 'react';
import './WorkoutCard.css'; 

const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout-card">
            <h3>Push Pull Legs</h3>
            <p className='date'><strong>Date Posted: 12/11/2024</strong></p>
            <p> <strong> Description: </strong>A Monday to Saturday workout that most people do </p>
            <p><strong>Equipment:</strong> gym </p>
            <p><strong>Duration:</strong> 1 1/2 hours</p>
            <p><strong>Calories Burned:</strong> will vary from person to person</p>
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/qVek72z3F1U?si=FKEsq_mbju7h58jF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
            </div>
    );
};

export default WorkoutCard;