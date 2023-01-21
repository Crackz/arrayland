import { Grid, Typography, Divider, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const SettingsHeader = ({ onNewItem }: { onNewItem: () => void }) => {
    return (
        <Grid container flexDirection="column">
            <Grid container item>
                <Grid item xs={10}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontWeight="bold"
                        component="div"
                    >
                        Array Lands
                    </Typography>
                </Grid>
                <Grid item xs={2} textAlign="end">
                    <IconButton onClick={onNewItem}>
                        <AddCircleIcon color="secondary" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
        </Grid>
    );
};

export default SettingsHeader;
