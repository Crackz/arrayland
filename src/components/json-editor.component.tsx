import { ArrayUtils } from '@/utils/array-utils';
import { Alert, Button, Grid, Snackbar } from '@mui/material';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';

const JSONEditor = ({
    defaultValue,
    onCodeSubmit,
}: {
    defaultValue?: string;
    onCodeSubmit: (arr2D: (string | number)[][]) => void;
}) => {
    const [code, setCode] = useState<string>(defaultValue || '');
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
        <Grid container item flexDirection="column">
            <Grid
                item
                sx={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    background: '#ffffff',
                    fontSize: '1.5em',
                    border: '5px solid #393E46',
                    marginBottom: '5%',
                    overflow: 'auto',
                    maxHeight: '70vh',
                }}
            >
                <Editor
                    value={code}
                    onValueChange={(code) => setCode(code)}
                    highlight={(code) => Prism.highlight(code, Prism.languages.json, 'json')}
                />
            </Grid>
            <Grid item textAlign="center">
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
