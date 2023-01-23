import Header from '@/components/header.component';
import JSONEditor from '@/components/json-editor.component';
import SettingsModal from '@/components/settings/settings-modal.component';
import SVGViewer from '@/components/svg/svg-viewer.component';
import { Land } from '@/interfaces/land.interface';
import theme from '@/themes/default.theme';
import { Grid, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [modalIsOpened, setModalIsOpened] = useState(false);
    const [arr2D, setArr2D] = useState<(string | number)[][]>([
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
    ]);

    const [lands, setLands] = useState<Land[]>([
        {
            value: 'DEFAULT',
            hexColor: '#cccccc',
        },
        {
            value: '0',
            hexColor: '#0c71c3',
        },
        {
            value: '1',
            hexColor: '#a17a74',
        },
    ]);

    const onCodeSubmit = (arr2D: (string | number)[][]) => {
        setArr2D(arr2D);
    };

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Array Land</title>
                <meta
                    name="description"
                    content="Array Land helps you convert arrays into 2d pictures"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header onSettingsClicked={() => setModalIsOpened(true)} />
                <Grid container margin={2} spacing={2} justifyContent="center">
                    <Grid item xs={5}>
                        <JSONEditor
                            defaultValue={JSON.stringify(arr2D)}
                            onCodeSubmit={onCodeSubmit}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SVGViewer lands={lands} arr2D={arr2D} />
                    </Grid>
                </Grid>
                <SettingsModal
                    shouldOpen={modalIsOpened}
                    lands={lands}
                    onClose={() => setModalIsOpened(false)}
                    onSave={(newLands: Land[]) => {
                        setModalIsOpened(false);
                        setLands(newLands);
                    }}
                />
            </main>
        </ThemeProvider>
    );
}
