import React from "react";
import { useAppContext } from "../context/Appcontext";

function Question({ question, currIndex }) {
  const { setChoosedAswers, choosedAswers } = useAppContext();
  function setOption(opt) {
    setChoosedAswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currIndex] = opt;
      return newAnswers;
    });
  }
  return (
    <div>
      <h1 className="question">{question?.description}</h1>
      <div className="options">
        {question?.options.map((option, index) => (
          <button
            key={option?.id}
            className={
              choosedAswers[currIndex]?.id === option?.id
                ? "option active"
                : "option"
            }
            onClick={() => setOption(option)}
          >
            {option?.description}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
