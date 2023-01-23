import { Land } from '@/interfaces/land.interface';
import { Grid } from '@mui/material';
import SVGGenerator from './svg-generator.component';

const SVGViewer = ({ lands, arr2D }: { lands: Land[]; arr2D: (string | number)[][] }) => {
    return (
        <Grid
            container
            item
            border="5px solid #393E46"
            justifyContent="center"
            textAlign="center"
            sx={{
                resize: 'both',
                overflow: 'auto',
            }}
        >
            <SVGGenerator arr2D={arr2D} lands={lands} />
        </Grid>
    );
};

export default SVGViewer;
