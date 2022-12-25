import React, { useState } from "react";
import "./styles/app.scss";
import Menu from "./components/Menu/Menu";
import TextEditor from "./components/TextEditor/TextEditor";
import Notesbar from "./components/Notesbar/Notesbar"

function App() {
  return (
    <div className="App">
      <Menu /> 
			<Notesbar />
    </div>
  );
}

export default App;
