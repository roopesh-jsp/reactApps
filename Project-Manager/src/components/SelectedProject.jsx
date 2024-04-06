import Button from "./Button.jsx";
import Tasks from "./Tasks.jsx";
import { useState } from "react";
export default function selectedProject({
  project,
  onDelete,
  addTask,
  tasks,
  delTask,
  selected,
}) {
  const reqTask = tasks.filter((task) => task.projectId === selected);

  return (
    <div className="my-16 w-full ">
      <header className="p-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className=" font-semibold uppercase text-xl  ">{project.name}</h2>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className=" font-light text-sm">Due-date :{project.date}</p>
        <p className=" mt-10 whitespace-pre-wrap pb-7  border-b-4">
          {project.description}
        </p>
      </header>

      <div className="mx-10 my-5">
        <h2 className="uppercase text-xl">Tasks</h2>
        <div className="my-2 flex gap-5 w-full items-center">
          <Tasks addTask={addTask} />
        </div>
        {reqTask.map((task) => (
          <p key={task.id} className="flex  justify-between w-9/12 my-3 ">
            <span>{task.text}</span>
            <span>
              <button
                className="hover:bg-stone-200 px-1 rounded
       "
                onClick={() => delTask(task.id)}
              >
                clear
              </button>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
