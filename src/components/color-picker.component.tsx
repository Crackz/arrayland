import ColorLensIcon from '@mui/icons-material/ColorLens';
import { FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
export const ColorPicker = ({ idx, color }: { idx: number; color: string }) => {
    const { control, unregister } = useFormContext();
    const inputName = `lands.${idx}.hexColor`;
    useEffect(() => {
        return () => unregister(inputName);
    }, []);

    return (
        <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor={idx.toString()}>
                    <ColorLensIcon />
                </InputLabel>

                <Controller
                    name={inputName}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={color}
                    render={({ field }) => (
                        <OutlinedInput
                            {...field}
                            label="XX"
                            sx={{ input: { textAlign: 'center' } }}
                            id={idx.toString()}
                            size="small"
                            type="color"
                        />
                    )}
                />
            </FormControl>
        </Grid>
    );
};

export default ColorPicker;
