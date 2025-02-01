import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const Appcontext = createContext({
  questions: [],
  choosedAswers: [],
  submitted: "",
  setSubmitted: () => {},
  setChoosedAswers: () => {},
  maxLen: 0,
});
export default function AppcontextProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [choosedAswers, setChoosedAswers] = useState(Array(10).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  let maxLen;
  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/questions");
      console.log(data);

      setQuestions(data);
      maxLen = data.length;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  const ctxVal = {
    questions,
    choosedAswers,
    submitted,
    setSubmitted,
    setChoosedAswers,
    maxLen,
  };
  return <Appcontext.Provider value={ctxVal}>{children}</Appcontext.Provider>;
}

export const useAppContext = () => {
  return useContext(Appcontext);
};
