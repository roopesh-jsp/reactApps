import { forwardRef, useContext, useEffect, useState } from "react";
import { CartItems } from "./CartContext";

const Modal = forwardRef(function Modal({}, ref) {
  const { items, addCart, removeCart } = useContext(CartItems);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(() => {
      return items.reduce((acc, item) => {
        console.log(item);

        return acc + item.total;
      }, 0);
    });
  }, [items]);

  const formatedPrice = totalPrice.toFixed(2);
  return (
    <dialog ref={ref}>
      <div className="dialog">
        <div className="cartItems">
          {items.map((item) => (
            <p key={item.id}>
              <span>{item.title}</span>
              {/* <span className="quantity" key={item.id}>
                <button className="quantityChange">-</button> */}
              <button onClick={() => removeCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addCart(item.id)}>+</button>
              {/* <button
                  className="quantityChange"
                  onClick={() => increment(item.id)}
                >
                  +
                </button> */}
              {/* </span> */}
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
