import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentNote } from '../../actions/notes.js';

import './notesbar.scss';

function Notesbar() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  const handleActiveNote = (note) => {
		dispatch(setCurrentNote(note));
	};

  return (
    <section className="notesbar">
      <div className="new-note-container">
        <div className="searcher-container">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
            </svg>
          </span>
          <input type="text" placeholder="Buscar..." />
        </div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M22.5 34h3v-8.5H34v-3h-8.5V14h-3v8.5H14v3h8.5ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z" />
          </svg>
        </button>
      </div>

      <div className="notes-container">
        <div className="notes">
          {notes.map((note) => (
            <div className="note" onClick={() => handleActiveNote(note)}>
              <h3>{note.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notesbar;
