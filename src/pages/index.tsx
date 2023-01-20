import Header from '@/components/header.component';
import JSONEditor from '@/components/json-editor.component';
import SettingsModal from '@/components/settings-modal.component';
import SVGViewer from '@/components/svg-viewer.component';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00ADB5',
        },
        secondary: {
            main: '#393E46',
        },
        info: {
            main: '#EEEEEE',
        },
    },
});

export default function Home() {
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
                <Header />
                <Box flex={1} display="flex" margin="2%" minHeight="100%" alignItems="flex-start">
                    <JSONEditor />
                    <SVGViewer />
                </Box>
                <SettingsModal />
            </main>
        </ThemeProvider>
    );
}
