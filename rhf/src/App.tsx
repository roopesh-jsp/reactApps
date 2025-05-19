import Todos from "./components/Todos";
import TodoContextProvider from "./context/TodoContextWrapper";

function App() {
  return (
    <div className="w-screen h-screen">
      <TodoContextProvider>
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
