import { useEffect, useState } from "react";

export default function Tasks({ addTask }) {
  const [newTask, setNewTask] = useState();
  function handleChnage(event) {
    setNewTask(event.target.value);

    // useEffect(() => {
    // event.target.addEventListener("keypress", function (event) {
    //   if (event.key === "Enter") {
    //     addTask(newTask);
    //     setNewTask("");
    //   }
    // });
    // }, []);
  }
  // let input = document.getElementById("input");

  // input.addEventListener("keypress", function (event) {
  //   if (event.key === "Enter") {
  //     addTask(newTask);
  //     setNewTask("");
  //   }
  // });

  return (
    <>
      <input
        id="input"
        type="text"
        className="bg-stone-200 w-9/12 h-8 rounded hover:outline-none p-2"
        onChange={handleChnage}
        value={newTask}
      />
      <button
        className="hover:bg-stone-200 p-2 rounded"
        onClick={() => {
          addTask(newTask);

          setNewTask("");
        }}
      >
        Add task
      </button>
    </>
  );
}
