import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // CORRECT
  };

  const decrement = () => {
    setCount(count - 1); // CORRECT
  };

  return (
    <div>
      <h3>Counter app</h3>
      <p>The count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
