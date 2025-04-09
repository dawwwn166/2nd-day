import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // state 선언: count, setCount

  const incrementCount = () => {
    setCount(prevCount => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const decrementCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>총합 {count}</p>
      <button type="button" onClick={incrementCount} disabled={count >= 10}>
        +1
      </button>
      <button type="button" onClick={decrementCount} disabled={count <= 0}>
        -1
      </button>
    </div>
  );
};

export default Counter;