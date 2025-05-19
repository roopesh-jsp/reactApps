import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import { Todo } from "../models/todo";
import TodoSingle from "./TodoSingle";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  impTodos: Todo[];
  setImpTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function Todos({ todos, setTodos, impTodos, setImpTodos }: Props) {
  return (
    <div className="container">
      <Droppable droppableId="todos">
        {(provided: DroppableProvided) => (
          <div
            className="container_todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="container_todos_heading">
              <h4>Tasks</h4>
            </div>
            <div className="todos">
              {todos.map((todo, idx) => (
                <TodoSingle
                  key={todo.id}
                  index={idx}
                  todo={todo}
                  setTodos={setTodos}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="impTodos">
        {(provided: DroppableProvided) => (
          <div
            className="container_todos imp"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="container_todos_heading">
              <h4>Important Tasks</h4>
            </div>
            <div className="todos">
              {impTodos.map((todo, idx) => (
                <TodoSingle
                  key={todo.id}
                  index={idx}
                  todo={todo}
                  setTodos={setImpTodos}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Todos;
