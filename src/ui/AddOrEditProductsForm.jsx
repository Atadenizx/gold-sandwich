import { useForm } from "react-hook-form";
import { inStockOptionArr } from "../features/data/datas";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import toast from "react-hot-toast";
import useAddProduct from "../features/admin/Products/useAddProduct";
import useEditProduct from "../features/admin/Products/useEditProduct";

function AddOrEditProductsForm({ editMode, productToEdit = {} }) {
  const { id: editId, ...editValues } = productToEdit;
  console.log("product to edit id:", editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editMode ? editValues : {},
  });

  const { addProduct, isLoading } = useAddProduct();
  const { editProduct } = useEditProduct();

  function onHandleSubmit(data) {
    // productToEdit
    //   ? editProduct({ product: data })
    //   : addProduct({ product: data });
    if (productToEdit) {
      editProduct({ product: data, id: editId });
      console.log("editing", data);
      reset();
    }
    if (!productToEdit) {
      addProduct({ product: data });
      console.log("adding new", data);
      reset();
    }
    return reset();
  }

  function onHandleError(err) {
    toast.error("error");
    console.log(err);
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-xl font-semibold">
        {editMode ? "Edit Existing Product" : "Add New Product"}
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
        <Input id="ingredients" register={register}>
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
        <Button disabled={isLoading} type="secondary">
          {editMode ? "Confrim Changes" : "Add New Product"}{" "}
        </Button>
      </form>
    </div>
  );
}

export default AddOrEditProductsForm;
