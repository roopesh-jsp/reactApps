import { useContext, useRef } from "react";
import { CartItems } from "./CartContext";
import Modal from "./Modal.jsx";

export default function Header() {
  const { items, theme, setTheme } = useContext(CartItems);
  const modal = useRef();
  function handleModal() {
    modal.current.showModal();
  }
  return (
    <>
      <Modal ref={modal} />
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
