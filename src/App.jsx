import React, { useState } from "react";
import "./styles/app.scss";
import Menu from "./components/Menu/Menu";
import TextEditor from "./components/TextEditor/TextEditor";
import Notesbar from "./components/Notesbar/Notesbar"
import Markdown from "./components/Markdown/Markdown";

function App() {
  return (
    <div className="App">
      <Menu /> 
			<Notesbar />
			<Markdown />
    </div>
  );
}

export default App;
