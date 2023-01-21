import * as React from 'react';
import { styled, AppBar, Box, Toolbar, IconButton, Typography, MenuItem } from '@mui/material';
import Settings from '@mui/icons-material/Settings';

const Title = styled(Typography)(() => ({
    flex: 1,
    fontSize: '2em',
    textShadow: '0px 2px 3px #EEEEEE',
    animation: 'colorFade 30s',
    animationIterationCount: 'infinite',
    paddingLeft: '2%',
}));

const Header = ({ onSettingsClicked }: { onSettingsClicked: () => void }) => {
    return (
        <AppBar position="static">
            <Toolbar variant="regular" sx={{ display: 'flex' }}>
                <Title variant="h4" color="info" fontWeight="bold">
                    Array Land
                </Title>
                <IconButton
                    color="info"
                    sx={{
                        justifyContent: 'flex-end',
                    }}
                    onClick={onSettingsClicked}
                >
                    <Settings />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
