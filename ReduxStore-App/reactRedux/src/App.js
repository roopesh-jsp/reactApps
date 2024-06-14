import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const Show = useSelector((x) => x.ui.showCart);
  return (
    <Layout>
      {Show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
