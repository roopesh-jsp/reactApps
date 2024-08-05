import { useContext } from "react";
import { CartItems } from "./CartContext.jsx";
import Header from "./Header.jsx";
import Shop from "./Shop.jsx";

export default function Dumy() {
  const { theme } = useContext(CartItems);

  return (
    <div className={theme}>
      <Header />
      <Shop />
    </div>
  );
}
