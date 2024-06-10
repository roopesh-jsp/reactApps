import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const counter = useSelector((x) => x.counter);
  const show = useSelector((y) => y.showCounter);
  const xy = useDispatch();
  function handleInc() {
    xy({ type: "inc" });
  }
  function handleDec() {
    xy({ type: "dec" });
  }
  function inc100() {
    xy({
      type: "inc100",
      payload: {
        value: 100,
      },
    });
  }
  function handleToggle() {
    xy({ type: "toggle" });
  }
  return (
    <div id="counter">
      <h1>--- redux counter ---</h1>
      {console.log(show)}
      {show && <h4>{counter}</h4>}
      <div>
        <button onClick={handleDec}>-</button>
        <button onClick={inc100}>inc by 100</button>
        <button onClick={handleInc}>+</button>
      </div>
      <button onClick={handleToggle}>toggle counter</button>
    </div>
  );
}
