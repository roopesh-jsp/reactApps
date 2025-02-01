import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/Appcontext";
import Question from "../components/Question";
import Modal from "../components/Modal";
import { use } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const { questions, choosedAswers, setSubmitted, submitted } = useAppContext();
  const [currIndex, setCurrIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  function showResults() {
    setSubmitted(true);
    navigate("/result");
  }
  useEffect(() => {
    if (submitted) {
      navigate("/result");
    }
  });
  return (
    <div className="quiz">
      {showModal && (
        <Modal title="Submit" closeModal={() => setShowModal(false)}>
          <p>Are you sure you want to submit?</p>
          <div className="cont">
            <h5>you answered</h5>
            <h3>
              {" "}
              {choosedAswers.reduce(
                (acc, x) => (x != -1 ? (acc += 1) : (acc = acc)),
                0
              )}
              /10{" "}
            </h3>
          </div>
          <div className="ques_cta">
            <button className="btn" onClick={showResults}>
              Yes
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              No
            </button>
          </div>
        </Modal>
      )}
      <Question question={questions[currIndex]} currIndex={currIndex} />
      <div className="ques_cta">
        <button
          onClick={() => setCurrIndex(currIndex - 1)}
          className="btn"
          disabled={currIndex === 0}
        >
          prev
        </button>
        <button className="btn" onClick={() => setShowModal(true)}>
          submit
        </button>
        <button
          onClick={() => setCurrIndex(currIndex + 1)}
          className="btn"
          disabled={currIndex >= questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
