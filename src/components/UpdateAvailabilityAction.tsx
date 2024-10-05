import type { ActionFunctionArgs } from "react-router-dom";
import { updateProductAvailability } from "../services/ProductService";
// import { redirect } from "react-router-dom";
// import { addProduct } from "../services/ProductService";

export async function UpdateAvailabilityAction({
  request,
}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  await updateProductAvailability(+data.id);

  return {};
}
