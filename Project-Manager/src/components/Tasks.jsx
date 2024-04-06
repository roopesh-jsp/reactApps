import { useState } from "react";

export default function Tasks({ addTask }) {
  const [newTask, setNewTask] = useState();
  function handleChnage(event) {
    setNewTask(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        className="bg-stone-200 w-9/12 h-8 rounded hover:outline-none p-2"
        onChange={handleChnage}
        // value={newTask}
      />
      <button
        className="hover:bg-stone-200 p-2 rounded"
        onClick={() => addTask(newTask)}
      >
        Add task
      </button>
    </>
  );
}
