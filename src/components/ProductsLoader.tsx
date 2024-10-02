import { getProducts } from "../services/ProductService";

export async function ProductsLoader() {
  const products = await getProducts();
  return products;
}
