import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>React Web</h1>
      <h2>{count}</h2>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <button className="reset-button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
