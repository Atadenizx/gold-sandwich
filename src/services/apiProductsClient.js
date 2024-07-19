import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.log(error);
    throw new Error("Products could not fetched");
  }
  return products;
}
