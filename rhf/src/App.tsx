import Todos from "./components/Todos";
import TodoContextProvider from "./context/TodoContextWrapper";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
