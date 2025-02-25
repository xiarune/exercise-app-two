

import React, { useState } from "react";

const RunningExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  let timer = null;


  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const recordLap = () => {
    setLaps([...laps, formatTime(time)]);
  };


  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };


  React.useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{name}</h2>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStartPause}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={recordLap} disabled={!isRunning}>Record Lap</button>
      <button onClick={resetTimer}>Reset</button>
      
      <h3>Lap Times:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;
