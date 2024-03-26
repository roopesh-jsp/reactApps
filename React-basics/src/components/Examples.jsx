import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples({ title, content }) {
  let [tab, setTab] = useState();
  function handleClick(selected) {
    setTab(selected);
  }
  return (
    <Section title={title} id="examples">
      <Tabs
        ButtonsCont="menu"
        content={
          <>
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
          </>
        }
      >
        {" "}
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
      </Tabs>
    </Section>
  );
}
