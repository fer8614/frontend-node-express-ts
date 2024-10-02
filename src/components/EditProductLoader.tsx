import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getProductsById } from "../services/ProductService";

export async function EditProductLoader({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const product = await getProductsById(+params.id);
    if (!product) {
      return redirect("/");
    }
    return product;
  }
}
