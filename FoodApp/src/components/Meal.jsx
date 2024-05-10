import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../shop/CartContext.jsx";
export default function Meal({ meal }) {
  const cxtval = useContext(CartContext);
  function additem() {
    cxtval.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description} </p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={additem}>add to cart</Button>
        </div>
      </article>
    </li>
  );
}
