import { ArrayUtils } from '@/utils/array-utils';
import { Alert, Box, Button, CircularProgress, Grid, Snackbar } from '@mui/material';
import { Container } from '@mui/system';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';

const example2dArray = `[
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 0]
]`;

const JSONEditor = ({
    isLoading,
    onCodeSubmit,
}: {
    isLoading: boolean;
    onCodeSubmit: (arr2D: (string | number)[][]) => void;
}) => {
    const [code, setCode] = useState<string>(example2dArray);
    const [invalidCodeMsg, setInvalidCodeMsg] = useState<string>('');

    const onSubmit = () => {
        try {
            const parsedCode = ArrayUtils.parseStringTo2DArray(code);
            onCodeSubmit(parsedCode);
        } catch (err: unknown) {
            setInvalidCodeMsg(err as string);
        }
    };

    const resetInvalidCodeMsg = () => {
        setInvalidCodeMsg('');
    };

    return (
        <Grid container flexDirection="column">
            <Grid
                item
                sx={{
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
            </Grid>
            <Grid item textAlign="center">
                {!isLoading ? (
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            color: 'info.main',
                            minWidth: '200px',
                            fontSize: '1em',
                            fontWeight: 'bold',
                            alignSelf: 'center',
                        }}
                        onClick={() => onSubmit()}
                    >
                        Show Land
                    </Button>
                ) : (
                    <CircularProgress color="primary" />
                )}
            </Grid>

            <Grid container justifyContent="center">
                <Snackbar
                    open={Boolean(invalidCodeMsg)}
                    autoHideDuration={6000}
                    onClose={resetInvalidCodeMsg}
                    sx={{ width: '100%' }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={resetInvalidCodeMsg} severity="error">
                        <pre>{`${invalidCodeMsg}`}</pre>
                    </Alert>
                </Snackbar>
            </Grid>
        </Grid>
    );
};

export default JSONEditor;
