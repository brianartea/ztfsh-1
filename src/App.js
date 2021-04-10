import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <Product
        comp="Product 1"
        name="Google Home"
        description="Your AI assistant"
        price={59.99}
      />
      <hr />
      <Product
        comp="Product 2"
        name="iPhone 12 Pro Max"
        description="The best iPhone"
        price={1299.99}
      />
      <hr />
      <Product
        comp="Product 3"
        name="Test Product"
        description="Te3st description"
        price={1100.99}
      />
    </div>
  );
}

export default App;
