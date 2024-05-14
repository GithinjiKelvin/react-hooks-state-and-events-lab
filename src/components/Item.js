import React, { useState } from "react";

function Item({ name, category }) {

  const [cName, setCName] = useState(false);

  function changeClass(){
    setCName((cName)=> !cName)
  }
  return (
    <li className={cName ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeClass} className="add">{cName ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
