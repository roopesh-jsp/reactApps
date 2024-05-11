import { useContext } from "react";
import Input from "./UI/Input.jsx";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import UserResponseContext from "../shop/UserResponseContext.jsx";
import CartContext from "../shop/CartContext.jsx";
export default function Checkout() {
  const userCxt = useContext(UserResponseContext);
  const cartCxt = useContext(CartContext);
  function handleCloseCheckout() {
    userCxt.hideCheckout();
  }
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCxt.items,
          custumer: data,
        },
      }),
    });
  }
  return (
    <Modal open={userCxt.response === "checkout"}>
      <form onSubmit={handleSubmit}>
        <Input label="full-name" id="fullName" type="text" />
        <Input label="E-mail" id="email" type="email" />
        <Input label="Street" id="street" type="street" />
        <p className="control-row">
          <Input label="post-code" id="postCode" type="text" />
          <Input label="reffer-no" id="referNo" type="text" />
        </p>
        <div className="modal-actions">
          <Button type="button" onlyText onClick={handleCloseCheckout}>
            close
          </Button>
          <Button>Place order</Button>
        </div>
      </form>
    </Modal>
  );
}
