import { useState } from "react";
import Header from "./components/header.jsx";
import Coreconcept from "./components/Coreconcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import "./index.css";

function App() {
  let [tab, setTab] = useState();
  function handleClick(selected) {
    setTab(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core-concepts</h2>
          <ul>
            {/* <Coreconcept {...CORE_CONCEPTS[0]} />
            <Coreconcept
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
            />
            <Coreconcept {...CORE_CONCEPTS[2]} />
            <Coreconcept {...CORE_CONCEPTS[3]} /> */}
            {CORE_CONCEPTS.map((item) => {
              return <Coreconcept {...item} />;
            })}
          </ul>
        </section>
        <div id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleClick("components")}
              isSlected={tab === "components"}
            >
              components
            </TabButton>
            <TabButton
              onSelect={() => handleClick("jsx")}
              isSlected={tab === "jsx"}
            >
              jsx
            </TabButton>
            <TabButton
              onSelect={() => handleClick("props")}
              isSlected={tab === "props"}
            >
              props
            </TabButton>
            <TabButton
              onSelect={() => handleClick("state")}
              isSlected={tab === "state"}
            >
              state
            </TabButton>
          </menu>
          {tab ? (
            <div id="tab-content">
              <h3>{EXAMPLES[tab].title}</h3>
              <p>{EXAMPLES[tab].description}</p>
              <pre>
                <code>{EXAMPLES[tab].code}</code>
              </pre>
            </div>
          ) : (
            <p>select one !!</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
