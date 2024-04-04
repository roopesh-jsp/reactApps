import { useRef, useState } from "react";
export default function Challenge({ title, targetTime }) {
  const timer = useRef();
  const [start, setStart] = useState(false);
  const [timerExp, setTimerExp] = useState(false);
  function handleStart() {
    setStart(true);
    timer.current = setTimeout(() => {
      setTimerExp(true);
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p>{timerExp ? "you lost !!" : ""}</p>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={start ? handleStop : handleStart}>
          {start ? "stop" : "start"} challenge
        </button>
      </p>
      <p>{start ? "time is running..." : "timer in active"}</p>
    </section>
  );
}
