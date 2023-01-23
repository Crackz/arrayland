import * as React from 'react';
import {
    styled,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Grid,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Image from 'next/image';
import LogoSVG from 'public/logo.svg';

const Header = ({ onSettingsClicked }: { onSettingsClicked: () => void }) => {
    return (
        <AppBar position="static">
            <Toolbar variant="regular">
                <Typography flex={1} marginLeft="2%">
                    <Image src={LogoSVG} alt="logo" width={80} height={80} />
                </Typography>
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
