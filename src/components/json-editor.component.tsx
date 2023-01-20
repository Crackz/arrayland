import { Box, Button } from '@mui/material';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import React from 'react';
import Editor from 'react-simple-code-editor';

const JSONEditor = ({}) => {
    const [code, setCode] = React.useState(`[
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
]`);

    return (
        <Box flex={1} display="flex" flexDirection="column" marginRight="1%" minWidth="20%">
            <Editor
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) => highlight(code, languages.json)}
                padding={10}
                id="textarea"
            />
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
