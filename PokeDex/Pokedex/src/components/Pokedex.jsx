import { useRef, useState } from "react";
import Input from "../UI/Input.jsx";
import Pokemon from "./Pokemon.jsx";

export default function Pokedex() {
  const input = useRef();
  const [enteredValue, setEnteredVlue] = useState("");
  function getValue() {
    setEnteredVlue(input.current.value);
  }
  return (
    <div id="pokedex">
      <div className="actions">
        <input type="text" id="search" ref={input} />
        <button onClick={getValue}>Search</button>
      </div>
      {enteredValue ? <Pokemon pokemon={enteredValue} /> : null}
    </div>
  );
}
