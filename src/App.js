import React from "react";
import Product from "./Product";
import "./App.module.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__heading">App Component</h1>
      <h2 className="app__error">An error occured</h2>
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
        description="Test description"
        price={1100.99}
      />
    </div>
  );
}

export default App;
