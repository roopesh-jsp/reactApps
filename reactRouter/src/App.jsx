import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Root from "./Root";
import Errorpage from "./components/Error";
import ProductDetails from "./components/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:pId", element: <ProductDetails /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
