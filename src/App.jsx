import React, { useState } from "react";
import { createTheme } from "@uiw/codemirror-themes";
import "./styles/app.scss";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import Menu from "./components/Menu/Menu";

const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#000000",
    foreground: "#FFFFFF",
    caret: "white",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#000000",
    gutterBackground: "#000000",
    gutterForeground: "#000000",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#5c6166" },
    { tag: t.tagName, color: "#5c6166" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value: ", value);
  }, []);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Nota 1",
      note: "Hola, esta es una nota",
    },
    {
      id: 2,
      title: "Nota 2",
      note: "Hola, esta es una nota2",
    },
    {
      id: 3,
      title: "Nota 3",
      note: "Hola, esta es una nota3",
    },
  ]);

  const [currentNote, setCurrentNote] = useState({
    note: "",
  });

  return (
    <div className="App">
      <Menu notes={notes} setCurrentNote={setCurrentNote} setNotes={setNotes} />
      <CodeMirror
        value={currentNote.note}
        height="100vh"
        width="100%"
        theme={myTheme}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
