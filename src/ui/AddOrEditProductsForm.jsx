import { useForm } from "react-hook-form";
import { inStockOptionArr } from "../features/data/datas";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import toast from "react-hot-toast";
import useAddProduct from "../features/admin/Products/addProduct";

function AddOrEditProductsForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { addProduct, isLoading } = useAddProduct();

  function onHandleSubmit(data) {
    addProduct({ product: data });
    console.log(data);
    return reset();
  }

  function onHandleError(err) {
    toast.error("error");
    console.log(err);
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-xl font-semibold">
        Add New Product
      </h1>
      <form
        id="addProductForm"
        onSubmit={handleSubmit(onHandleSubmit, onHandleError)}
        className="grid grid-cols-2 gap-4"
      >
        <Input
          id="name"
          rules={{
            required: "This field is required",
          }}
          required={true}
          register={register}
        >
          Name
        </Input>
        <Input
          id="category"
          required={true}
          rules={{
            required: "This field is required",
          }}
          register={register}
        >
          Category
        </Input>
        <Input id="ingredient" register={register}>
          Ingredient
        </Input>
        <Input id="allergens" register={register}>
          Allergens
        </Input>
        <Input
          id="price"
          required={true}
          rules={{
            required: "This field is required",
          }}
          register={register}
          type="number"
        >
          Price
        </Input>
        {/* <Input type="file">Image</Input> */}
        <Select
          required={true}
          rules={{
            required: "This field is required",
          }}
          register={register}
          caption="Is in stock?"
          optionsArr={inStockOptionArr}
          id={"in_stock"}
          defaultValue="true"
        />
        <Button type="secondary">Add new Item</Button>
      </form>
    </div>
  );
}

export default AddOrEditProductsForm;
