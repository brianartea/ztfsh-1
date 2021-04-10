import React from "react";
import styles from "./Product.module.css";
import ItemDscription from "./ItemDscription";

function Product({ name, description, price }) {
  return (
    <div className={styles.product}>
      <ItemDscription name={name} description={description} />
      <h2 className={styles.error}>An error occured</h2>
      <h3 className={styles.price}>${price}</h3>
    </div>
  );
}

export default Product;
