import { useState } from "react";
import Header from "./components/Header";
import Userinputs from "./components/Userinputs";
import Results from "./components/Results";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 15,
  });
  function handleChange(indentifier, newValue) {
    setUserInputs((prevValue) => {
      return {
        ...prevValue,
        [indentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Userinputs inputs={userInputs} fun={handleChange} />
      <Results inputs={userInputs} />
    </>
  );
}

export default App;
