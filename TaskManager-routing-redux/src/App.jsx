 import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Challenges from "./pages/Challenges.jsx";
import { Provider } from "react-redux";
import store from "./store/challengeStore.js";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/challenges",
    element: <Challenges />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
