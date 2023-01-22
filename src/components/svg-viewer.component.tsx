import { Grid } from '@mui/material';
import Image from 'next/image';
import exampleSVG from 'public/example.svg';

const SVGViewer = ({ isLoading }: { isLoading: boolean }) => {
    let style = {};
    if (isLoading) {
        style = {
            opacity: 0.4,
            filter: 'alpha(opacity=40)',
            backgroundColor: '#000',
        };
    }

    return (
        <Grid
            container
            border="5px solid #393E46"
            justifyContent="center"
            textAlign="center"
            sx={{
                resize: 'both',
                overflow: 'auto',
            }}
        >
            <Image
                priority
                id="image"
                src={exampleSVG}
                alt={''}
                width={0}
                height={0}
                style={{
                    ...style,
                    width: '100%',
                    height: '100%',
                }}
            />
        </Grid>
    );
};

export default SVGViewer;
