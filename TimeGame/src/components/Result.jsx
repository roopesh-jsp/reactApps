import { forwardRef, useImperativeHandle, useRef } from "react";
const Resultvar = forwardRef(function Result(
  { result, targetTime, resetFun, timeLeft },
  ref
) {
  const dialogee = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogee.current.showModal();
      },
    };
  });
  const totalTime = targetTime * 1000;
  const secondsLeft = (timeLeft / 1000).toFixed(2);
  const score = Math.round((1 - timeLeft / totalTime) * 100);

  return (
    <dialog ref={dialogee} className="result-modal">
      {timeLeft <= 0 ? <h2>you Lost</h2> : <h2>Score : {score}</h2>}
      <p>
        target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        you stoped the timer <strong>{secondsLeft} seconds</strong> before
      </p>
      <form method="dialog" onSubmit={resetFun}>
        <button>close</button>
      </form>
    </dialog>
  );
});
export default Resultvar;
