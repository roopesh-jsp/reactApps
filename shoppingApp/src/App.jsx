import CartContext from "./components/CartContext.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

export default function App() {
  return (
    <CartContext>
      <Header />
      <Shop />
    </CartContext>
  );
}
