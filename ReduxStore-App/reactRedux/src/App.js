import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const Show = useSelector((x) => x.ui.showCart);
  const cart = useSelector((x) => x.cart);
  useEffect(() => {
    fetch("https://reduxstore-ea018-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {Show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
