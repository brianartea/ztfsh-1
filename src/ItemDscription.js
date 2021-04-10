import React from "react";
import "./ItemDscription.css";

function ItemDscription({ name, description }) {
  return (
    <div>
      <p>{name}</p>
      <p>
        <i>{description}</i>
      </p>
    </div>
  );
}

export default ItemDscription;
