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

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="regular" sx={{ flex: 1, display: 'flex' }}>
                <Title variant="h4" color="info">
                    Array Island
                </Title>
                <IconButton
                    color="info"
                    sx={{
                        flex: 1,
                        padding: 0,
                        width: 0,
                        height: 0,
                        justifyContent: 'flex-end',
                    }}
                >
                    <Settings />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
