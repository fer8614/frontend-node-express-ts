import { safeParse } from "valibot";
import { DraftProductSchema } from "../types";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: data.price,
    });
    if (result.success) {
      // Add product to database
      console.log("Data is valid");
    } else {
      throw new Error("Data is invalid");
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
