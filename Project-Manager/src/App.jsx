import { useState } from "react";
import FallBackMsg from "./components/FallBackMsg.jsx";
import Project from "./components/Project.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [selectedProject, setSelectedProject] = useState({
    selected: undefined,
    proejects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setSelectedProject((prev) => {
      const newTask = {
        text: text,
        projectId: prev.selected,
        id: Math.random(),
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  function handleDelTask(id) {
    setSelectedProject((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleSelectProject(id) {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selected: id,
      };
    });
  }
  function handelAddProject() {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selected: null,
      };
    });
  }
  function handleDelete() {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selected: undefined,
        proejects: prev.proejects.filter(
          (project) => project.id !== selectedProject.selected
        ),
      };
    });
  }
  const x = selectedProject.proejects.find(
    (project) => project.id === selectedProject.selected
  );
  let content = (
    <SelectedProject
      project={x}
      onDelete={handleDelete}
      addTask={handleAddTask}
      tasks={selectedProject.tasks}
      delTask={handleDelTask}
      selected={selectedProject.selected}
    />
  );
  if (selectedProject.selected === null) {
    content = <Project addingNew={handleNewProject} onCancle={handleCancle} />;
  } else if (selectedProject.selected === undefined) {
    content = <FallBackMsg onAdd={handelAddProject} />;
  }
  // const [addNew, setAddNew] = useState(false);
  // function handleNew() {
  //   setAddNew(true);
  // }
  function handleNewProject(project) {
    setSelectedProject((prev) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prev,
        selected: undefined,
        proejects: [...prev.proejects, newProject],
      };
    });
  }
  function handleCancle() {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selected: undefined,
      };
    });
  }

  return (
    <main className="h-screen flex gap-8 my-5 ">
      <Sidebar
        onAdd={handelAddProject}
        projects={selectedProject.proejects}
        onSelect={handleSelectProject}
        selected={selectedProject.selected}
      />
      {/* {addNew ? <Project /> : <FallBackMsg onAdd={handleNew} />} */}
      {content}
    </main>
  );
}

export default App;
