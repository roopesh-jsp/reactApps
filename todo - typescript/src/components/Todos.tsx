import { Todo } from "../models/todo";
import TodoSingle from "./TodoSingle";

type props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  impTodos: Todo[];
  setImpTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function Todos({ todos, setTodos, impTodos, setImpTodos }: props) {
  return (
    <div className="container">
      <div className="container_todos">
        <div className="container_todos_heading">
          <h4>Tasks</h4>
        </div>
        <div id="todos">
          {todos.map((todo, idx) => (
            <TodoSingle key={idx} todo={todo} setTodos={setTodos} />
          ))}
        </div>
      </div>
      <div className="container_todos imp">
        <div className="container_todos_heading">
          <h4>Tasks</h4>
        </div>
        <div id="todos">
          {impTodos.map((todo, idx) => (
            <TodoSingle key={idx} todo={todo} setTodos={setImpTodos} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
