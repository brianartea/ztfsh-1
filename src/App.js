import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />
    </div>
  );
}

export default App;
