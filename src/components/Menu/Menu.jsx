import React, { useState } from 'react';
import './menu.scss';

function Menu({ notes, setCurrentNote, setNotes }) {
  const handleAddNotebook = () => {
    console.log('Agregando libreta');
  };

	const handleSelectNotebook = () => {
		console.log('Libreta seleccionada')
	}

  return (
    <div className="menu">
      <div className="new-notebook-container">
        <h2>Libreta</h2>
        <button onClick={handleAddNotebook}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M17.15 27H28.4v-3H17.15Zm0-4.5H36.9v-3H17.15Zm0-4.5H36.9v-3H17.15ZM13 38q-1.2 0-2.1-.9-.9-.9-.9-2.1V7q0-1.2.9-2.1.9-.9 2.1-.9h28q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h28V7H13v28Zm-6 9q-1.2 0-2.1-.9Q4 42.2 4 41V10h3v31h31v3Zm6-37v28V7Z" />
          </svg>
        </button>
      </div>

      <div className="notebook-container">
        <div className="searcher-container">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
            </svg>
          </span>
          <input type="text" placeholder="Buscar..." />
        </div>

        <div className="notebooks" onClick={handleSelectNotebook}>
          <div className="notebook">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M5 42q-1.25 0-2.125-.875T2 39V10.5h3V39h36.5v3Zm6-6q-1.25 0-2.125-.875T8 33V7q0-1.25.875-2.125T11 4h13l3 3h16q1.25 0 2.125.875T46 10v23q0 1.25-.875 2.125T43 36Zm0-3h32V10H25.75l-3-3H11v26Zm0 0V7v26Z" />
              </svg>
            </span>
            <h3>Libreta 1</h3>
          </div>

          <div className="notebook" onClick={handleSelectNotebook}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M5 42q-1.25 0-2.125-.875T2 39V10.5h3V39h36.5v3Zm6-6q-1.25 0-2.125-.875T8 33V7q0-1.25.875-2.125T11 4h13l3 3h16q1.25 0 2.125.875T46 10v23q0 1.25-.875 2.125T43 36Zm0-3h32V10H25.75l-3-3H11v26Zm0 0V7v26Z" />
              </svg>
            </span>
            <h3>Libreta 1</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
