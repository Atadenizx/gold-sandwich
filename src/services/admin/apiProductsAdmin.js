import supabase from "../supabase";

export async function addProductApi({ product }) {
  const { name, category, price, ingredients, allergens, in_stock } = product;
  console.log(name);
  const { data, error } = await supabase
    .from("products")
    .insert([{ name, category, price, ingredients, allergens, in_stock }])
    .select();
  console.log(error);
}

export async function deleteProductApi(id) {
  console.log("supabse product id:", id);
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function editProductApi({ product, id }) {
  const { name, category, price, ingredients, allergens, in_stock } = product;
  console.log("edit id:", id);
  const { data, error } = await supabase
    .from("products")
    .update({ name, category, price, ingredients, allergens, in_stock })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
}
