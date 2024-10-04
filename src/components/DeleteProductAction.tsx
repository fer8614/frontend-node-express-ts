import type { ActionFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import { deleteProduct } from "../services/ProductService";

export async function DeleteProductAction({ params }: ActionFunctionArgs) {
  if (params.id) {
    await deleteProduct(+params.id);
    return redirect("/");
  }
}
