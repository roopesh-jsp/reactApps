import React, { useState, useEffect } from "react";
import Editor from "./components/editor.jsx";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="panel panel-top">
        <Editor language="xml" display="HTML" value={html} onChange={setHtml} />
        <Editor language="css" display="CSS" value={css} onChange={setCss} />
        <Editor
          language="javascript"
          display="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="panel">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
