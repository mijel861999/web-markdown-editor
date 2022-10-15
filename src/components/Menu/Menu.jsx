import React from "react";
import "./menu.scss";

function Menu({ notes, setCurrentNote, setNotes }) {
  const handleAddNote = () => {};

  return (
    <div className="menu">
      <h1>Notas</h1>
      <button onClick={handleAddNote}>Add</button>
      <div className="notes">
        {notes.map((note) => (
          <h2 onClick={() => setCurrentNote(note)}>{note.title}</h2>
        ))}
      </div>
    </div>
  );
}

export default Menu;
