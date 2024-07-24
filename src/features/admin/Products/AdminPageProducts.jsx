import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/apiProductsClient";
import { useState } from "react";
import AdminProductItem from "./AdminProductItem";
import Spinner from "../../../ui/Spinner";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import AddOrEditProductsForm from "../../../ui/AddOrEditProductsForm";
import useDeleteProducts from "./useDeleteProducts";

function AdminPageProducts() {
  const [isSortedBy, setIsSortedBy] = useState("id");
  const [openModal, setOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  const {
    data: AdminProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Admin_products"],
    queryFn: getProducts,
  });

  const { deleteProduct } = useDeleteProducts();

  const sortedProducts = AdminProducts?.sort((a, b) => {
    const aValue = a[isSortedBy];
    const bValue = b[isSortedBy];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue);
    } else {
      return aValue - bValue;
    }
  });

  console.log(productToEdit);

  function onSortBy(e) {
    setIsSortedBy(e.target.value);
  }

  function onHandleDeleteProduct(id) {
    deleteProduct(id);
  }

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (!isLoading) {
    return (
      <div className="relative h-screen px-12">
        <div className="flex justify-center gap-4">
          <div>
            <span>Filter by /</span>
            <select onChange={(e) => onFilterBy(e)} name="filter" id="filter">
              <option value="id">Id</option>
              <option value="category">Category</option>
              <option value="product_name">Name</option>
              <option value="price">Price</option>
              <option value="ingredients">Ingredients</option>
              <option value="allergents">Allergents</option>
              <option value="in_stock">In stock</option>
            </select>
          </div>
          <div>
            <span>Sort by /</span>
            <select onChange={(e) => onSortBy(e)} name="sort" id="sort">
              <option value="id">Id</option>
              <option value="category">Category</option>
              <option value="product_name">Name</option>
              <option value="price">Price</option>
              <option value="ingredients">Ingredients</option>
              <option value="allergents">Allergents</option>
              <option value="in_stock">In stock</option>
            </select>
          </div>
          <div>
            <Button
              handleOnClick={() => setOpenModal(!openModal)}
              type="primary"
            >
              Add new item
            </Button>
          </div>
        </div>
        <div>
          <ul className="w-full">
            {sortedProducts?.map((product) => (
              <AdminProductItem
                product={product}
                key={product.id}
                editMode={editMode}
                setEditMode={setEditMode}
                setOpenModal={setOpenModal}
                openModal={openModal}
                onHandleDeleteProduct={onHandleDeleteProduct}
                setProductToEdit={setProductToEdit}
              />
            ))}
          </ul>
        </div>
        {openModal && (
          <div className="absolute z-30">
            <Modal
              editMode={editMode}
              setEditMode={setEditMode}
              setOpenModal={setOpenModal}
              openModal={openModal}
            >
              {" "}
              <AddOrEditProductsForm
                productToEdit={productToEdit}
                editMode={editMode}
              />
            </Modal>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default AdminPageProducts;
