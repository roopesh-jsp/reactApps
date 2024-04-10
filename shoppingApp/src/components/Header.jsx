import { useContext, useRef, useState } from "react";
import { CartItems } from "./CartContext";
import Modal from "./Modal.jsx";

export default function Header() {
  const { items, theme, setTheme } = useContext(CartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const modal = useRef();
  function handleModal() {
    modal.current.showModal();
    setTotalPrice(() => {
      return items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    });
  }
  return (
    <>
      <Modal ref={modal} TotalPrice={totalPrice} />
      <header>
        <h2>ShopEr</h2>
        <div className="btns">
          <button onClick={setTheme}>
            {theme === "light" ? "dark" : "light"}
          </button>
          <button onClick={handleModal}>Cart {items.length}</button>
        </div>
      </header>
    </>
  );
}
