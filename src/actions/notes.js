import { types } from '../types/types'

export const setCurrentNote = (currentNote) => ({
	type: types.setCurrentNote,
	payload: currentNote
})
