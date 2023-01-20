import { Box, Button } from '@mui/material';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import React from 'react';
import Editor from 'react-simple-code-editor';

const JSONEditor = ({}) => {
    const exampleText = `[
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
]`;
    const [code, setCode] = React.useState(exampleText);

    return (
        <Box flex={1} display="flex" flexDirection="column" marginRight="2%" minWidth="20%">
            <Box
                sx={{
                    flex: 1,
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    background: '#ffffff',
                    fontSize: '1.5em',
                    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0)',
                    border: '5px solid #393E46',
                    color: '#444',
                    marginBottom: '5%',
                    overflow: 'auto',
                    maxHeight: '70vh',
                }}
            >
                <Editor
                    value={code}
                    onValueChange={(code) => setCode(code)}
                    highlight={(code) => highlight(code, languages.json)}
                    padding={10}
                />
            </Box>
            <Button
                variant="contained"
                size="large"
                sx={{
                    color: 'info.main',
                    maxWidth: '200px',
                    fontSize: '1em',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                }}
            >
                Show Land
            </Button>
        </Box>
    );
};

export default JSONEditor;
