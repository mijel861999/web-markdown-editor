import { types } from '../types/types';

const initialState = {
  notes: [
    {
      id: 'asdf',
      title: 'Título 01',
      note: '# Nota 01'
    },
    {
      id: 'asdfasdf',
      title: 'Título 02',
      note: '# Nota 02'
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
		case types.setCurrentNote:
			return {
				...state,
				currentNote: action.payload
			}
    default:
      return state;
  }
};
