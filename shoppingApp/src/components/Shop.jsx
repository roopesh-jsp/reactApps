import { useContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { CartItems } from "./CartContext.jsx";

export default function Shop() {
  const { addCart } = useContext(CartItems);
  return (
    <main>
      <div id="shop">
        {DUMMY_PRODUCTS.map((product) => (
          <div className="item" key={product.id}>
            <img src={product.image} alt="" />
            <div className="itemInfo">
              <h3>{product.title}</h3>
              <h4>price : {product.price}</h4>
              <p>{product.description}</p>
              <div className="addCart">
                <button onClick={() => addCart(product.id)}>Add cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
