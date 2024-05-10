import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../shop/CartContext.jsx";
export default function Header() {
  const { items } = useContext(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>FoodApp</h1>
      </div>
      <nav>
        <Button onlyText>cart ({items.length})</Button>
      </nav>
    </header>
  );
}
