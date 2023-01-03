import React from 'react'

import Menu from "../../components/Menu/Menu.jsx";
import TextEditor from "../../components/TextEditor/TextEditor";
import Notesbar from "../../components/Notesbar/Notesbar"
import Markdown from "../../components/Markdown/Markdown";

function MainView() {
	return (
		<>
			<Menu /> 
			<Notesbar />
			<Markdown />
		</>
	)
}

export default MainView;
