import { number, string, boolean, array, object, InferOutput } from "valibot";

type ProductSchema = {
  id: number;
  name: string;
  price: number;
  availability: boolean
}
export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean()
});

export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput<typeof ProductSchema>;
