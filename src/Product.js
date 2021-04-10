import React from "react";
import ItemDscription from "./ItemDscription";

function Product({ comp, name, description, price }) {
  return (
    <div>
      <h3>This is the Product.js with 3 props from App.js</h3>
      <h4>{comp}</h4>
      <ItemDscription name={name} description={description} />
      <h3>${price}</h3>
    </div>
  );
}

export default Product;
