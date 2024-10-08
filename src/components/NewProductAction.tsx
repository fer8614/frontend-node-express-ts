import type { ActionFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import { addProduct } from "../services/ProductService";

export async function NewProductAction({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";
  if (Object.values(data).includes("")) {
    error = "All fields are required";
  }
  if (error.length) {
    return error;
  }
  await addProduct(data);
  return redirect("/");
}
