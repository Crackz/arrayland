import Header from '@/components/header.component';
import JSONEditor from '@/components/json-editor.component';
import SettingsModal from '@/components/settings/settings-modal.component';
import SVGViewer from '@/components/svg-viewer.component';
import { Land } from '@/interfaces/land.interface';
import theme from '@/themes/default.theme';
import { Box, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
    const [modalIsOpened, setModalIsOpened] = React.useState(true);
    const [lands, setLands] = useState<Land[]>([
        {
            value: '0',
            hexColor: '#0c71c3',
        },
        {
            value: '1',
            hexColor: '#a17a74',
        },
    ]);

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Array Island</title>
                <meta
                    name="description"
                    content="Array Island helps you convert arrays into 2d pictures"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header onSettingsClicked={() => setModalIsOpened(true)} />
                <Box flex={1} display="flex" margin="2%" minHeight="100%" alignItems="flex-start">
                    <JSONEditor />
                    <SVGViewer />
                </Box>
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
