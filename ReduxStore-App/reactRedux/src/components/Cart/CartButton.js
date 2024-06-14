import classes from "./CartButton.module.css";
import { uiActions } from "../../store/UI-slice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((x) => x.cart.items);
  return (
    <button className={classes.button}>
      <span onClick={() => dispatch(uiActions.toggle())}>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
