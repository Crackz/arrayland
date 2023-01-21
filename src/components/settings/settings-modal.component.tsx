import { Land } from '@/interfaces/land.interface';
import { Container, Fade, Grid, Modal } from '@mui/material';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import SettingsForm from './settings-form.component';
import SettingsHeader from './settings-header.component';

const SettingsModal = ({
    lands,
    shouldOpen,
    onClose,
    onSave,
}: {
    lands: Land[];
    shouldOpen: boolean;
    onClose: () => void;
    onSave: (newLands: Land[]) => void;
}) => {
    const formMethods = useForm<{ lands: Land[] }>({
        defaultValues: { lands },
    });
    const onSubmit = ({ lands }: { lands: Land[] }) => onSave(lands);
    const {
        fields: landsWithIds,
        append,
        remove,
    } = useFieldArray({
        control: formMethods.control,
        name: 'lands',
    });

    const deleteLand = (idx: number) => {
        remove(idx);
    };

    const addNewLand = () => {
        append({
            value: '',
            hexColor: '#000000',
        });
    };

    return (
        <Modal open={shouldOpen} onClose={onClose} closeAfterTransition keepMounted>
            <Fade in={shouldOpen}>
                <Container
                    sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #EEE',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <SettingsHeader onNewItem={addNewLand} />
                    <Grid container mt="5%" justifyContent="center" alignItems="center">
                        <FormProvider {...formMethods}>
                            <SettingsForm
                                landsWithIds={landsWithIds}
                                onDelete={deleteLand}
                                onClose={onClose}
                                onSave={formMethods.handleSubmit(onSubmit)}
                            />
                        </FormProvider>
                    </Grid>
                </Container>
            </Fade>
        </Modal>
    );
};

export default SettingsModal;
