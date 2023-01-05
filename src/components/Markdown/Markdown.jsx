import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './markdown.scss';

import MarkdownEditor from '../MarkdownEditor/MarkdownEditor.jsx';
import MarkdownVisualizer from '../MarkdownVisualizer/MarkdownVisualizer.jsx';

const Markdown = () => {
  const { notes, currentNote } = useSelector((state) => state.notes);
	const { title, note } = currentNote;
  const [markdownText, setMarkdownText] = useState(`${note}`);

	console.log(currentNote)
	console.log(markdownText)

	useEffect(() => {
		setMarkdownText(note)
	}, [currentNote])


  return (
    <section className="markdown">
      <input type="text" value={title} />
      <div className="markdown-editor-visualizer">
        <MarkdownEditor markdownText={markdownText} setMarkdownText={setMarkdownText} />
        <MarkdownVisualizer doc={markdownText} />
      </div>
    </section>
  );
};

export default Markdown;
