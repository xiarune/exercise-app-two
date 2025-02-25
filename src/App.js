
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";
import "./App.css"; 

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Bicycling", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Running", type: "running" }, 
    { name: "Sit Ups", type: "repetition" },
  ];

  return (
    <div className="App">
      {selectedExercise ? (
        <div className="exercise-container">
          <button className="back-button" onClick={() => setSelectedExercise(null)}>Back</button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : (
            <RunningExercise name={selectedExercise.name} /> 
          )}
        </div>
      ) : (
        <div>
          <h1>Go Do Something!</h1>
          <h2>Select an exercise:</h2>
          <div className="exercise-buttons">
            {exercises.map((exercise, index) => (
              <button key={index} onClick={() => setSelectedExercise(exercise)}>
                {exercise.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;




