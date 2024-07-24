import { useState } from "react";
import Button from "../../../ui/Button";
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

/* eslint-disable react/prop-types */
function AdminProductItem({
  product,
  onHandleDeleteProduct,
  editmode,
  setEditMode,
  openModal,
  setOpenModal,
  setProductToEdit,
}) {
  const { id: productId } = product;

  function onHandleEdit() {
    setOpenModal(!openModal);
    setEditMode(!editmode);
    setProductToEdit(product);
  }

  function onHandleDelete() {
    onHandleDeleteProduct(productId);
  }

  return (
    <li className="borderblack flex w-full items-center gap-4 border">
      <p>{product?.id}</p>
      <p>{product?.category?.toUpperCase()}</p>
      <div>{product?.name?.toUpperCase()}</div>
      <div>{product?.price} $</div>
      <Button handleOnClick={onHandleEdit}>
        <div className="flex items-center gap-1">
          <div> Edit</div>
          <FaEdit />
        </div>
      </Button>
      <Button handleOnClick={onHandleDelete} type="primary">
        <div className="flex items-center gap-1">
          <div> Delete</div>
          <TiDelete />
        </div>
      </Button>
    </li>
  );
}

export default AdminProductItem;
