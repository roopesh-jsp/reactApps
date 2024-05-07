import { useState } from "react";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Header />
      <main>
        {isLogin ? (
          <Login toogle={setIsLogin} />
        ) : (
          <Signup toogle={setIsLogin} />
        )}
      </main>
    </>
  );
}

export default App;
