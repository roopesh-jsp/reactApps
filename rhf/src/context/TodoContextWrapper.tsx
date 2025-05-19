import { createContext, useContext, useState, type ReactNode } from "react";

export type Todos = {
  text: string;
  id: string;
  isCompleted: boolean;
};

type TodoContextType = {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

export const todoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});

export default function TodoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [todos, setTodos] = useState<Todos[]>([]);
  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
}

export const useTodos = () => {
  return useContext(todoContext);
};
