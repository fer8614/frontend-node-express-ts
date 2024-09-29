import { safeParse } from "valibot";
import axios from "axios";
import { DraftProductSchema } from "../types";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      // Add product to database
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      const { data } = await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
      console.log(data);
    } else {
      throw new Error("Data is invalid");
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
