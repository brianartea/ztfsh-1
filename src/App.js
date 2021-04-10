import React from "react";
import Product from "./Product";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>The App</h1>
      <h2 className={styles.error}>An error occured</h2>
      <Product
        comp="Product 1"
        name="Google Home"
        description="Your AI assistant"
        price={59.99}
      />
      <Product
        comp="Product 2"
        name="iPhone 12 Pro Max"
        description="The best iPhone"
        price={1299.99}
      />
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
