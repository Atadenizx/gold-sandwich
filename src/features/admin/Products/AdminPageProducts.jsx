import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/apiProductsClient";
import { useState } from "react";
import AdminProductItem from "./AdminProductItem";
import Spinner from "../../../ui/Spinner";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import AddOrEditProductsForm from "../../../ui/AddOrEditProductsForm";

function AdminPageProducts() {
  const [isSortedBy, setIsSortedBy] = useState("id");
  const [filterBy, setFilterBy] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const {
    data: AdminProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Admin_products"],
    queryFn: getProducts,
  });

  const sortedProducts = AdminProducts?.sort((a, b) => {
    const aValue = a[isSortedBy];
    const bValue = b[isSortedBy];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue);
    } else {
      return aValue - bValue;
    }
  });

  function onFilterBy(e) {
    setFilterBy(e.target.value);
  }

  function onSortBy(e) {
    setIsSortedBy(e.target.value);
  }

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (!isLoading) {
    return (
      <div className="relative px-12">
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
          <ul>
            {sortedProducts?.map((product) => (
              <AdminProductItem product={product} key={product.id} />
            ))}
          </ul>
        </div>
        {openModal && (
          <div className="bg-blur backdrop-blur-ld absolute z-30 flex h-full w-full items-center justify-center">
            <Modal setOpenModal={setOpenModal} openModal={openModal}>
              {" "}
              <AddOrEditProductsForm />
            </Modal>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default AdminPageProducts;
