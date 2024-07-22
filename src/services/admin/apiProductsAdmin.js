import supabase from "../supabase";

export async function addProductApi({ product }) {
  const { name, category, price, ingredients, allergens, in_stock } = product;
  console.log(name);
  const { data, error } = await supabase
    .from("products")
    .insert([
      { product_name: name, category, price, ingredients, allergens, in_stock },
    ])
    .select();
  console.log(error);
}

// .insert([{ some_column: "someValue", other_column: "otherValue" }])
