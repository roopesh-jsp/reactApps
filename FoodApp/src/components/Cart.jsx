import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../shop/CartContext.jsx";
import Button from "./UI/Button.jsx";
import UserResponseContext from "../shop/UserResponseContext.jsx";
import { formatter } from "./UTIL/Formatter.js";
import CartItem from "./CartItem.jsx";
export default function Cart() {
  const cartCxt = useContext(CartContext);
  const userCxt = useContext(UserResponseContext);
  const totalAmmount = cartCxt.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  //   console.log("hai");
  function handleCloseCart() {
    userCxt.hideCart();
  }
  return (
    <Modal className="cart" open={userCxt.response === "cart"}>
      <h2>Your items -</h2>
      <ul>
        {cartCxt.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onInc={() => cartCxt.addItem(item)}
            onDec={() => cartCxt.removeItem(item.id)}
          />
        ))}
      </ul>
      <div className="cart-total">
        total value - {formatter.format(totalAmmount)}
      </div>
      <div className="modal-actions">
        <Button onlyText onClick={handleCloseCart}>
          close
        </Button>
        <Button onClick={handleCloseCart}>checkout</Button>
      </div>
    </Modal>
  );
}
