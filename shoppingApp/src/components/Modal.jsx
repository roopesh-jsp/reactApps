import { forwardRef, useContext } from "react";
import { CartItems } from "./CartContext";

const Modal = forwardRef(function Modal({}, ref) {
  const { items } = useContext(CartItems);
  return (
    <dialog ref={ref}>
      <div className="dialog">
        <div className="cartItems">
          {items.map((item) => (
            <p key={item.id}>
              <span>{item.title}</span>
              <span>{item.quantity}</span>
            </p>
          ))}
        </div>
        <form method="diaalog">
          <button>close</button>
        </form>
      </div>
    </dialog>
  );
});
export default Modal;
