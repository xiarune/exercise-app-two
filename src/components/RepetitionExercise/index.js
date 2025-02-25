
import React, { useState } from "react";

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default RepetitionExercise;
