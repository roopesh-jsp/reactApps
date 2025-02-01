import React from "react";
import { useAppContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { setChoosedAswers, setSubmitted } = useAppContext();
  const navigate = useNavigate();
  function startQuiz() {
    setChoosedAswers(Array(10).fill(-1));
    setSubmitted(false);
    navigate("/quiz");
  }
  return (
    <div>
      <div className="container center">
        <div className="help">
          <div className="txt">
            <span className="txt_crt">+1 correct</span>
            <span className="txt_left">0 left</span>
            <span className="txt_wrng">-1 wrong</span>
          </div>
          <button className="btn_big" onClick={startQuiz}>
            start
          </button>
        </div>
      </div>
    </div>
  );
}
