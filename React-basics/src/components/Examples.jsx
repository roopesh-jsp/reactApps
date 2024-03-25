import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
export default function Examples({ title, content }) {
  let [tab, setTab] = useState();
  function handleClick(selected) {
    setTab(selected);
  }
  return (
    <div id="examples">
      <h2>{title}</h2>
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
  );
}
