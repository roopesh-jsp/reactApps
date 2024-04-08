import Dumy from "./components/dumy.jsx";
import CartContext from "./components/CartContext.jsx";
import { CartItems } from "./components/CartContext.jsx";
import { useContext } from "react";
export default function App() {
  return (
    <div>
      <CartContext>
        <Dumy />
      </CartContext>
    </div>
  );
}
