import React from 'react';
import './markdown.scss';

import MarkdownEditor from '../MarkdownEditor/MarkdownEditor.jsx';
import MarkdownVisualizer from '../MarkdownVisualizer/MarkdownVisualizer.jsx';

const Markdown = () => {
  return (
    <section className="markdown">
			<input type="text" value="Nota 1" />
      <div className="markdown-editor-visualizer">
        <MarkdownEditor />
        <MarkdownVisualizer />
      </div>
    </section>
  );
};

export default Markdown;
