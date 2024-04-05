import { useRef, useState } from "react";
import Result from "./Result.jsx";
export default function Challenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerAlive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  function handleRest() {
    setTimeRemaining(targetTime * 1000);
  }
  return (
    <>
      <Result
        ref={dialog}
        targetTime={targetTime}
        result="lost"
        resetFun={handleRest}
        timeLeft={timeRemaining}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerAlive ? handleStop : handleStart}>
            {timerAlive ? "stop" : "start"} challenge
          </button>
        </p>
        <p>{timerAlive ? "time is running..." : "timer in active"}</p>
      </section>
    </>
  );
}
