import React from 'react';
import './WorkoutCard.css'; 

const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout-card">
            <h3>Full Body</h3>
            <p className='date'><strong>Date Posted: 12/11/2024</strong></p>
            <p><strong> Description: </strong>a full body work out perfomred every other day that is sure to get you fit</p>
            <p><strong>Equipment:</strong> gym </p>
            <p><strong>Duration:</strong> 1 1/2 hours</p>
            <p><strong>Calories Burned:</strong> will vary from person to person</p>
            <p><strong>Workout: </strong> This is my personal workout so unfortunaly there is no video. You will do one warm-up set and then one real set to failure for each of these work outs. Make sure to not start the real set until you feel rested. The rep range should be 5 to 8 if you can do more than 8 keep going but raise the weight the next session. Incline smith, Smith shoulder press, Smith Jam press, Lat pull down, Upper back row, One arm lat pull, Lateral raise, Preacher curl, Carter extension, RDL, Leg press, Leg extension, Leg curl, Hip abductor, Toe press, Ab machine 
</p>
            </div>
    );
};

export default WorkoutCard;
