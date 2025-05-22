import { useTodos, type Todos } from "../context/TodoContextWrapper";

function Todo({ todo }: { todo: Todos }) {
  const { todos, setTodos } = useTodos();
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let copyTodos = [...todos];
    let index = copyTodos.findIndex((t) => t.id === todo.id);
    copyTodos[index].isCompleted = e.target.checked;
    setTodos(copyTodos);
  };
  const deleteTodo = () => {
    let copyTodos = [...todos];
    copyTodos = copyTodos.filter((t) => t.id !== todo.id);
    setTodos(copyTodos);
  };
  return (
    <div className="flex justify-between items-center gap-10 w-[250px] bg-stone-300 p-4 rounded-lg mt-2">
      <div className="flex justify-between items-center gap-4 w-full">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheck}
          className="w-4 h-4 cursor-pointer rounded-full appearance-none border-1 border-black checked:bg-blue-300"
        />
        <span className=" break-words w-[70%] line-clamp-2">{todo.text}</span>
        <button
          onClick={deleteTodo}
          className="cursor-pointer text-red-400
      font-bold text-sm "
        >
          DEL
        </button>
      </div>
    </div>
  );
}

export default Todo;
