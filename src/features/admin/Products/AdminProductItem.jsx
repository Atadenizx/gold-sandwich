import { useState } from "react";

/* eslint-disable react/prop-types */
function AdminProductItem({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  function onHandleClick() {
    setIsOpen(!isOpen);
  }

  if (isOpen) {
    return (
      <li onClick={onHandleClick} className="borderblack border">
        <span>{product.product_name}</span>
        <span>{product.price}</span>
        <span>in stock?{product.in_stock ? "yes" : "no"}</span>
        <span>{product.ingredients}</span>
      </li>
    );
  }

  return (
    <li
      onClick={onHandleClick}
      className="borderblack flex w-full gap-4 border"
    >
      <p>{product.id}</p>
      <p>{product.category.toUpperCase()}</p>
      <div>{product.product_name.toUpperCase()}</div>
      <div>{product.price} $</div>
    </li>
  );
}

export default AdminProductItem;
