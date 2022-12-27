import React, { useState, createElement, Fragment } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse/lib';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react/lib';

import './markdownVisualizer.scss';

const MarkdownVisualizer = ({ doc="# Esta es tu nota" }) => {

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(doc).result;

  return (
    <div className="markdown-visualizer">
      <div>{md}</div>
    </div>
  );
};

export default MarkdownVisualizer;
