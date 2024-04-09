import { useCallback, useRef, useState } from "react";
import questions from "../questions.js";
import EndQuiz from "./EndQuiz.jsx";
import ProgressBar from "./ProgressBar.jsx";
export default function Quiz() {
  const [ansChoosed, setAnsChoosed] = useState([]);
  const currQuestionIndex = ansChoosed.length;
  function handleClick(ans) {
    setAnsChoosed((prev) => {
      return [...prev, ans];
    });
  }
  const skipQuestion = useCallback(() => handleClick(null), [handleClick]);
  const shuffledAnswers = useRef();
  if (currQuestionIndex <= questions.length - 1) {
    shuffledAnswers.current = [...questions[currQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  const isQuizCompleted = ansChoosed.length === questions.length;
  if (isQuizCompleted) {
    return <EndQuiz result={ansChoosed} />;
  }
  return (
    <div id="quiz">
      <div id="question">
        {/* <ProgressBar timeOut={4000} onTimeOut={skipQuestion} /> */}
        <h2>{questions[currQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleClick(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
