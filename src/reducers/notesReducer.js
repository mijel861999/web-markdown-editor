import { types } from '../types/types';

const initialState = {
  notes: [
    {
      id: 'asdf',
      title: 'Título de prueba',
      note: 'Nota de título'
    }
  ],
  currentNote: {
    id: 'asdf',
    title: 'Título de prueba',
    note: '# Nota de título'
  }
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
