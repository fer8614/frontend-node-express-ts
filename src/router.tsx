import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import { loader as productsLoader } from "./components/ProductLoader";
import { action as newProductAction } from "./components/ProductServiceAction";
import NewProduct from "./views/NewProduct";
import EditProduct, { loader as editProductLoader } from "./views/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        // ROA Pattern - Resource-oriented design
        path: "products/:id/edit",
        element: <EditProduct />,
        loader: editProductLoader,
      },
    ],
  },
]);
