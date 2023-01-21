import { Button, FormGroup, Grid } from '@mui/material';
import LandInput from '../land-input.component';
import { Land } from './settings-modal.component';
import { FieldArrayWithId, FieldArray } from 'react-hook-form';

const SettingsForm = ({
    landsWithIds,
    onDelete,
    onClose,
    onSave,
}: {
    landsWithIds: FieldArrayWithId<{ lands: Land[] }>[];
    onDelete: (idx: number) => void;
    onClose: () => void;
    onSave: () => void;
}) => {
    return (
        <FormGroup>
            <Grid container flexDirection="column" spacing={2}>
                {landsWithIds.map((landWithId, idx) => (
                    <LandInput
                        key={landWithId.id}
                        land={landWithId}
                        idx={idx}
                        onDelete={onDelete}
                    />
                ))}
            </Grid>
            <Grid mt={2} container justifyContent="center" spacing={2}>
                <Grid item>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            color: 'info.main',
                            fontSize: '1em',
                            fontWeight: 'bold',
                        }}
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        size="small"
                        type="submit"
                        onClick={onSave}
                        sx={{
                            color: 'info.main',
                            fontSize: '1em',
                            fontWeight: 'bold',
                        }}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </FormGroup>
    );
};

export default SettingsForm;
