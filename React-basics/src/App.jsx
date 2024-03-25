import Header from "./components/header.jsx";
import Examples from "./components/Examples.jsx";
import Coreconcepts from "./components/Coreconcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Coreconcepts />
        <Examples title="Examples" />
      </main>
    </div>
  );
}

export default App;
