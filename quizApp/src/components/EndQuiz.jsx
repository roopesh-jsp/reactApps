import { useState } from "react";
import Endimg from "../assets/quiz-complete.png";
import questions from "../questions.js";
export default function EndQuiz({ result, setResult }) {
  let finalLogs = [];
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    finalLogs = [
      ...finalLogs,
      [result[i], questions[i].answers[0], Math.random()],
    ];

    if (result[i] === questions[i].answers[0]) {
      score = score + 100;
    }
  }
  function restart() {
    setResult([]);
  }
  return (
    <div id="summary">
      <img src={Endimg} alt="" />
      <h2>Quiz completed</h2>
      <h2>Score : {score}</h2>
      <h4>{score / 100} / 7</h4>
      <p>Correct answers - Logs</p>
      <ol>
        {finalLogs.map((ele, idx) => (
          <li className="log" key={ele[2]}>
            <span className="indexes">{idx + 1} . </span>
            <span className={ele[0] === ele[1] ? "correct" : "wrong"}>
              {" "}
              {ele[0] === null ? "skipped" : ele[0]}
            </span>{" "}
            <br />
            <br /> <span>{ele[1]}</span>
          </li>
        ))}
      </ol>
      <button onClick={restart}>try again</button>
    </div>
  );
}
