import Parse from "parse";


// Function to fetch all workouts
    export const fetchWorkouts = async () => {
        const Workout = Parse.Object.extend("WorkoutRoutine"); // 'WorkoutRoutine' is the table name in Back4App
        const query = new Parse.Query(Workout);
    
        try {
          const results = await query.find();
        //   console.log("Fetched workouts:", results);
          
          // Map fetched workout objects into an array of workout details
          const fetchedWorkouts = results.map(workout => ({
            date: workout.get("createdAt").toLocaleDateString(),
            workout_name: workout.get("routine_name"),
            description: workout.get("routine_description"),
            equipment: workout.get("routine_equipment"),
            duration: workout.get("duration"),
            calories_burned: workout.get("calories_burned")
          }));
          return fetchedWorkouts;  // return our workouts
        } catch (error) {
          console.error("Error fetching workouts:", error);
        }
      };