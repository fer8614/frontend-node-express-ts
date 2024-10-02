import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import { ProductsLoader } from "./components/ProductsLoader";
import { NewProductAction } from "./components/NewProductAction";
import { NewProductAction as EditProducAction } from "./components/NewProductAction";
import NewProduct from "./views/NewProduct";
import { EditProductLoader } from "./components/EditProductLoader";
import EditProduct from "./views/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: ProductsLoader,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: NewProductAction,
      },
      {
        // ROA Pattern - Resource-oriented design
        path: "products/:id/edit",
        element: <EditProduct />,
        loader: EditProductLoader,
        action: EditProducAction,
      },
    ],
  },
]);
