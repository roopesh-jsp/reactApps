import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../shop/CartContext.jsx";
import UserResponseContext from "../shop/UserResponseContext.jsx";
export default function Header() {
  const { items } = useContext(CartContext);
  const userCxt = useContext(UserResponseContext);
  const totalItemCount = items.reduce((TotalCount, item) => {
    return TotalCount + item.quantity;
  }, 0);
  function handleShowCart() {
    userCxt.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>FoodApp</h1>
      </div>
      <nav>
        <Button onlyText onClick={handleShowCart}>
          cart ({totalItemCount})
        </Button>
      </nav>
    </header>
  );
}
