import { useTodos, type Todos } from "../context/TodoContextWrapper";

function Todo({ todo }: { todo: Todos }) {
  const { todos, setTodos } = useTodos();
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let copyTodos = [...todos];
    let index = copyTodos.findIndex((t) => t.id === todo.id);
    copyTodos[index].isCompleted = e.target.checked;
    setTodos(copyTodos);
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheck}
        />
        <span>{todo.text}</span>
      </div>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
