import { Land } from '@/interfaces/land.interface';
import { SettingsForm } from '@/interfaces/settings-form.interface';
import { Button, FormGroup, FormHelperText, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';
import LandInput from '../land-input.component';

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
        if (isValidating && duplicatedLand) setDuplicatedLand(undefined);
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
            {duplicatedLand && (
                <Grid container mt={2} justifyContent="center">
                    <FormHelperText
                        variant="filled"
                        component="p"
                        sx={{ fontWeight: 'bold' }}
                        error
                    >{`Value ${duplicatedLand.value} is duplicated`}</FormHelperText>
                </Grid>
            )}
        </FormGroup>
    );
};

export default SettingsForm;
