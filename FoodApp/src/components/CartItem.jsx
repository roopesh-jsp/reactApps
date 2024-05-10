import { formatter } from "./UTIL/Formatter";
export default function ({ item, onInc, onDec }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {formatter.format(item.price)} x {item.quantity}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDec}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onInc}>+</button>
      </p>
    </li>
  );
}
