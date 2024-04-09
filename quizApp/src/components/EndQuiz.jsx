import Endimg from "../assets/quiz-complete.png";
import questions from "../questions.js";
export default function EndQuiz({ result }) {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (result[i] === questions[i].answers[0]) {
      score = score + 100;
    }
  }
  console.log(score);
  return (
    <div id="summary">
      <img src={Endimg} alt="" />
      <h2>Quiz completed</h2>
      <h2>Score : {score}</h2>
      <h4>{score / 100} / 7</h4>
    </div>
  );
}
