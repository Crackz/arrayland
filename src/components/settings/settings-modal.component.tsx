import { Land } from '@/interfaces/land.interface';
import { Container, Fade, Grid, Modal } from '@mui/material';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import SettingsForm from './settings-form.component';
import SettingsHeader from './settings-header.component';

const SettingsModal = ({ shouldOpen, onClose }: { shouldOpen: boolean; onClose: () => void }) => {
    const formMethods = useForm<{ lands: Land[] }>({
        defaultValues: {
            lands: [
                {
                    value: '0',
                    hexColor: '#0c71c3',
                },
                {
                    value: '1',
                    hexColor: '#a17a74',
                },
            ],
        },
    });
    const onSubmit = (data: any) => console.log(data);
    const {
        fields: lands,
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
                                landsWithIds={lands}
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
