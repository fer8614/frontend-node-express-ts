import { number, string, boolean, array, object, InferOutput } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});

export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput<typeof ProductSchema>;

export type ProductData = {
  [k: string]: FormDataEntryValue;
};
