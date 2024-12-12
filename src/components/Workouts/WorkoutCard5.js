import React from 'react';
import './WorkoutCard.css'; 

const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout-card">
            <h3>Running</h3>
            <p className='date'><strong>Date Posted: 12/11/2024</strong></p>
            <p><strong> Description: </strong>You will run on a tredmill till you burn 500 calories at max incline low speed</p>
            <p><strong>Equipment:</strong> tredmill </p>
            <p><strong>Duration:</strong> 30 to 40 mins</p>
            <p><strong>Calories Burned:</strong> 500</p>
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/w_7vxdmPGRs?si=FyFaUki6hpG_MpWR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
            </div>
    );
};

export default WorkoutCard;