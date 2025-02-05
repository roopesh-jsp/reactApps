import { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [impTodos, setImpTodos] = useState<Todo[]>([]);
  return (
    <div>
      <Input setTodos={setTodos} />
      <Todos
        todos={todos}
        setTodos={setTodos}
        impTodos={impTodos}
        setImpTodos={setImpTodos}
      />
    </div>
  );
}

export default App;
