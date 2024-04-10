import { forwardRef, useContext, useState } from "react";
import { CartItems } from "./CartContext";

const Modal = forwardRef(function Modal({ TotalPrice }, ref) {
  const { items, increment } = useContext(CartItems);
  const formatedPrice = TotalPrice.toFixed(2);

  return (
    <dialog ref={ref}>
      <div className="dialog">
        <div className="cartItems">
          {items.map((item) => (
            <p key={item.id}>
              <span>{item.title}</span>
              <span className="quantity" key={item.id + 1}>
                <button className="quantityChange">-</button>
                <span>{item.quantity}</span>
                <button
                  className="quantityChange"
                  onClick={() => increment(item.id)}
                >
                  +
                </button>
              </span>
            </p>
          ))}
        </div>

        <form method="dialog">
          <p>Price :{formatedPrice}</p>
          <button>close</button>
        </form>
      </div>
    </dialog>
  );
});
export default Modal;
