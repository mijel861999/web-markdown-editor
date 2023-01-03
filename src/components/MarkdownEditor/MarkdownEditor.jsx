import React, { useCallback, useEffect } from 'react';
import './markdownEditor.scss';
import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#000000',
    foreground: '#FFFFFF',
    caret: 'white',
    selection: 'white',
    selectionMatch: 'grey',
    lineHighlight: '#000000',
    gutterBackground: '#000000',
    gutterForeground: '#000000'
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' }
  ]
});

const MarkdownEditor = ({ markdownText, setMarkdownText }) => {

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value: ', value);
		setMarkdownText(value)
  }, []);


  return (
    <div className="markdown-editor">
      <CodeMirror
        width="100%"
        max-width="400px"
        height="90vh"
        theme={myTheme}
        onChange={onChange}
        basicSetup={{
          lineNumbers: false,
					lineWrap: false,
          highlightActiveLineGutter: false,
          foldGutter: false,
          fontFamily: 'Inter',
          syntaxHighlighting: true
        }}
				lineWrap={true}
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
      />
    </div>
  );
};

export default MarkdownEditor;
