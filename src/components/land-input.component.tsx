import { Land } from '@/interfaces/land.interface';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid, IconButton, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import ColorPicker from './color-picker.component';

const LandInput = ({
    idx,
    land,
    onDelete,
}: {
    land: Land;
    idx: number;
    onDelete: (idx: number) => void;
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext<{ lands: Land[] }>();

    const valueInputError = errors.lands && errors.lands[idx]?.value;

    return (
        <Grid
            container
            item
            spacing={2}
            justifyContent="center"
            alignItems="baseline"
            alignContent="baseline"
            xs={12}
            flexDirection="row"
        >
            <Grid item xs={5}>
                <Controller
                    name={`lands.${idx}.value`}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={land.value}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            sx={{ input: { textAlign: 'center' } }}
                            size="small"
                            label="Value:"
                            variant="outlined"
                            error={Boolean(valueInputError)}
                            helperText={valueInputError && 'Value Is Required'}
                        />
                    )}
                />
            </Grid>
            <Grid item xs={5}>
                <ColorPicker idx={idx} color={land.hexColor} />
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={() => onDelete(idx)}>
                    <RemoveCircleIcon color="secondary" />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default LandInput;
