import { useEffect, useState } from "react";

export default function ProgressBar({ timeOut, onTimeOut }) {
  const [timeLeft, setTimeLeft] = useState(timeOut);
  useEffect(() => {
    console.log("interval");
    setInterval(onTimeOut, timeOut);
  }, [timeOut, onTimeOut]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 100);
    }, 100);
    return clearTimeout(timer);
  }, []);

  return <progress id="question-time" max={timeOut} value={timeLeft} />;
}
