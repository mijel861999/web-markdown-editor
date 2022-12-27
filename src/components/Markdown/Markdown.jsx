import React, { useState } from 'react';
import './markdown.scss';

import MarkdownEditor from '../MarkdownEditor/MarkdownEditor.jsx';
import MarkdownVisualizer from '../MarkdownVisualizer/MarkdownVisualizer.jsx';

const Markdown = () => {
  const [markdownText, setMarkdownText] = useState('# Markdown Text');

  return (
    <section className="markdown">
      <input type="text" value="Nota 1" />
      <div className="markdown-editor-visualizer">
        <MarkdownEditor markdownText={markdownText} setMarkdownText={setMarkdownText} />
        <MarkdownVisualizer doc={markdownText} />
      </div>
    </section>
  );
};

export default Markdown;
