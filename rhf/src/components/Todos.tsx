import { useForm } from "react-hook-form";
import { useTodos, type Todos } from "../context/TodoContextWrapper";
import Todo from "./Todo";

function Todos() {
  const { todos, setTodos } = useTodos();
  type Inputs = {
    text: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newTodo: Todos = {
      text: data.text,
      id: crypto.randomUUID(),
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Todo ... " {...register("text")} />
        <button>ADD</button>
      </form>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
