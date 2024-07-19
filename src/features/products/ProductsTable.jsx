import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProductsClient";
import Spinner from "../../ui/Spinner";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import ProductsItem from "./ProductsItem";

function ProductsTable() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (error) {
    console.log(error);
    throw new Error("there has been error whilst getting products data");
  }

  console.log(products);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="flex items-center justify-evenly border border-black text-center">
        <span className="text-2xl font-semibold">Selection from our menu</span>
        <Button type="primary">
          <NavLink to={"/menus"}>View the entire menu</NavLink>
        </Button>
      </div>
      <div className="mt-4 flex justify-evenly gap-4">
        {products.map((product) => (
          <ProductsItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsTable;
