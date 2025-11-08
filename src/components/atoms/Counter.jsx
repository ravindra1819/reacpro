import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    // ✅ Each update gets the latest value
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementTwice}>Increment Twice</button>
    </div>
  );
}

export default Counter;
