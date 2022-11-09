import React, { useState } from "react";
import "./styles/app.scss";
import Menu from "./components/Menu/Menu";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
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
      <TextEditor currentNote={currentNote} />
    </div>
  );
}

export default App;
