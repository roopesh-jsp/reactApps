import { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [impTodos, setImpTodos] = useState<Todo[]>([]);
  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    //no change case
    if (!destination) return;
    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    )
      return;

    let add,
      todosref = todos,
      imptodosref = impTodos;

    //deleting todo from source
    if (source.droppableId === "todos") {
      add = todosref[source.index];
      todosref.splice(source.index, 1);
    } else {
      add = imptodosref[source.index];
      imptodosref.splice(source.index, 1);
    }

    //adding todo to respective destinantion
    if (destination.droppableId === "todos") {
      todosref.splice(destination.index, 0, add);
    } else {
      imptodosref.splice(destination.index, 0, add);
    }

    setTodos(todosref);
    setImpTodos(imptodosref);
  }
  return (
    <div>
      <Input setTodos={setTodos} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Todos
          todos={todos}
          setTodos={setTodos}
          impTodos={impTodos}
          setImpTodos={setImpTodos}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
