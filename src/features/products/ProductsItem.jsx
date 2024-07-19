import Button from "../../ui/Button";

function ProductsItem({ product }) {
  return (
    <li className="list-none">
      <div className="flex h-full flex-col rounded-lg border border-black p-4">
        <img className="h-48 w-full object-cover" src={product.image_url} />
        <div className="mt-4 flex flex-grow flex-col justify-between">
          <h1 className="font-lg text-xl uppercase">{product.product_name}</h1>
          <p className="mt-2">{product.ingredients}</p>
          <div className="textcen flex items-center justify-between">
            <h2>{product.price}</h2>
            <Button options="px-4" type="primary">
              +
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductsItem;
