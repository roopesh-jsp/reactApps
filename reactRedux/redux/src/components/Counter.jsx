import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
export default function Counter() {
  const counterVal = useSelector((s) => s.counter.counter);
  const show = useSelector((s) => s.counter.show);
  const dispatch = useDispatch();
  function handleDec() {
    dispatch(counterActions.dec());
  }
  function handleInc() {
    dispatch(counterActions.inc());
  }
  function inc100() {
    dispatch(counterActions.inc100(50));
  }
  function handleToggle() {
    dispatch(counterActions.toggle());
  }
  return (
    <div id="counter">
      <h1>--- redux counter ---</h1>
      {show && <h4>{counterVal}</h4>}
      <div>
        <button onClick={handleDec}>-</button>
        <button onClick={inc100}>inc by 100</button>
        <button onClick={handleInc}>+</button>
      </div>
      <button onClick={handleToggle}>toggle counter</button>
    </div>
  );
}
