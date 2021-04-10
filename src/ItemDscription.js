import React from "react";

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
