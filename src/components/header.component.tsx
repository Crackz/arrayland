import Settings from '@mui/icons-material/Settings';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ onSettingsClicked }: { onSettingsClicked: () => void }) => {
    return (
        <AppBar position="static">
            <Toolbar variant="regular">
                <Typography flex={1} marginLeft="2%">
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" width={80} height={80} />
                    </Link>
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
