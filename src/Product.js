import React from "react";

function Product(props) {
  return (
    <div>
      <h3>This is the Product.js with 3 props from App.js</h3>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h3>${props.price}</h3>
    </div>
  );
}

export default Product;
