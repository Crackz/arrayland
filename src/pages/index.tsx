import Header from '@/components/header.component';
import JSONEditor from '@/components/json-editor.component';
import SettingsModal from '@/components/settings/settings-modal.component';
import SVGViewer from '@/components/svg-viewer.component';
import theme from '@/themes/default.theme';
import { Box, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function Home() {
    const [modalIsOpened, setModalIsOpened] = React.useState(true);

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
                <SettingsModal shouldOpen={modalIsOpened} onClose={() => setModalIsOpened(false)} />
            </main>
        </ThemeProvider>
    );
}
