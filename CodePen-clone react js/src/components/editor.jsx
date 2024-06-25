import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
function Editor({ value, onChange, langauge, display }) {
  const [collapsed, setCollapsed] = useState(false);
  function handleChange(x, y, value) {
    onChange(value);
  }
  return (
    <div className={`editor ${collapsed ? "collapsed-editor" : ""}`}>
      <div className="title">
        <h1> {display}</h1>
        <button onClick={() => setCollapsed((prev) => !prev)}>o/c</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code"
        options={{
          lineWrapping: true,
          lint: true,
          theme: "material",
          lineNumbers: true,
          mode: langauge,
        }}
      />
    </div>
  );
}
export default Editor;
