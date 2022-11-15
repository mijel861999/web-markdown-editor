import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import './menu.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

function Menu({ notes, setCurrentNote, setNotes }) {
  const [openModal, setOpenModal] = useState(false);

  const handleAddNote = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {};

  return (
    <div className="menu">
      <Button onClick={handleAddNote} variant="contained">
        Agregar
      </Button>
      <div className="notes">
        {notes.map((note) => (
          <input key={note.id} value={note.title} onClick={() => setCurrentNote(note)} />
        ))}
      </div>

      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <Button onClick={() => setOpenModal(false)}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Menu;
