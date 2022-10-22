import React, {useState} from "react";
import {Button, Modal} from '@mui/material'
import "./menu.scss";

function Menu({ notes, setCurrentNote, setNotes }) {
	const [openModal, setOpenModal] = useState(false);


	const handleAddNote = () => {
		setOpenModal(true)
	}

	const handleModalClose = () => {}

  return (
    <div className="menu">
      <h1>Notas</h1>
			<Button onClick={handleAddNote} variant="contained">Agregar</Button>
      <div className="notes">
        {notes.map((note) => (
          <h2 onClick={() => setCurrentNote(note)}>{note.title}</h2>
        ))}
      </div>

			<Modal
				open={openModal}
				onClose={handleModalClose}
				aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
			>
				<Button onClick={() => setOpenModal(false)}>Cerrar</Button>
			</Modal>
    </div>
  );
}

export default Menu;
