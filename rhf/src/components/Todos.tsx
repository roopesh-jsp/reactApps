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

  const onSubmit = (data: Inputs) => {
    const newTodo: Todos = {
      text: data.text,
      id: crypto.randomUUID(),
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    reset();
  };

  return (
    <div className="w-[80%] mx-auto bg-stone-200 p-4 rounded-lg mt-10 flex gap-4 justify-between pr-4 max-h-[80vh] ">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <input
          type="text"
          placeholder="Todo ... "
          {...register("text", {
            required: { value: true, message: "cusotm error" },
          })}
          className="border-2 border-black p-2 rounded-tl-lg rounded-bl-lg focus:outline-none "
          autoComplete="off"
        />
        <button className="border-2 border-black rounded-tr-lg rounded-br-lg border-l-0 cursor-pointer hover:bg-blue-600 hover:text-red-300 p-2 bg-blue-400">
          ADD
        </button>
        {errors.text && (
          <p className="capitalize text-lg text-red-600 font-semibold ">
            {errors.text.message}
          </p>
        )}
      </form>
      <div className="pr-2 h-[70vh] overflow-y-scroll ">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
