import ColorLensIcon from '@mui/icons-material/ColorLens';
import { FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material';

export const ColorPicker = () => {
    return (
        <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    <ColorLensIcon />
                </InputLabel>
                <OutlinedInput
                    label="XX"
                    sx={{ input: { textAlign: 'center' } }}
                    id="outlined-adornment-password"
                    size="small"
                    type="color"
                />
            </FormControl>
        </Grid>
    );
};

export default ColorPicker;
