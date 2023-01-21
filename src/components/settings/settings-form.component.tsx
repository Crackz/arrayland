import { Land } from '@/interfaces/land.interface';
import { SettingsForm } from '@/interfaces/settings-form.interface';
import {
    Alert,
    Button,
    FormGroup,
    FormHelperText,
    Grid,
    IconButton,
    Snackbar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';
import LandInput from '../land-input.component';
import CloseIcon from '@mui/icons-material/Close';

const SettingsForm = ({
    landsWithIds,
    onDelete,
    onClose,
    onSave,
}: {
    landsWithIds: FieldArrayWithId<SettingsForm>[];
    onDelete: (idx: number) => void;
    onClose: () => void;
    onSave: (lands: Land[]) => void;
}) => {
    const [duplicatedLand, setDuplicatedLand] = useState<Land | undefined>(undefined);
    const {
        formState: { isValidating },
        handleSubmit,
    } = useFormContext<SettingsForm>();

    useEffect(() => {
        if (isValidating && duplicatedLand) removeDuplicationError();
    }, [isValidating]);

    const checkDuplicatedLand = (lands?: Land[]): Land | undefined => {
        if (!lands || lands.length === 0) return;

        const seen = new Set();
        for (let land of lands) {
            if (seen.has(land.value)) return land;
            seen.add(land.value);
        }
    };

    const onSubmit = ({ lands }: SettingsForm) => {
        const duplicatedLand = checkDuplicatedLand(lands);
        if (duplicatedLand) {
            setDuplicatedLand(duplicatedLand);
            return;
        }

        onSave(lands || []);
    };

    const removeDuplicationError = () => {
        setDuplicatedLand(undefined);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setDuplicatedLand(undefined)}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

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
                        onClick={handleSubmit(onSubmit)}
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
            <Grid container justifyContent="center">
                <Snackbar
                    open={Boolean(duplicatedLand)}
                    autoHideDuration={6000}
                    onClose={removeDuplicationError}
                    sx={{ width: '100%' }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={removeDuplicationError} severity="error">
                        {`Value ${duplicatedLand?.value} is duplicated`}
                    </Alert>
                </Snackbar>
            </Grid>
        </FormGroup>
    );
};

export default SettingsForm;
