import React from "react";
import "./menu.scss";

function Menu({ notes, setCurrentNote }) {
  return (
    <div className="menu">
      <h1>Notas</h1>
      {notes.map((note) => (
        <h2 onClick={() => setCurrentNote(note)}>{note.title}</h2>
      ))}
    </div>
  );
}

export default Menu;
