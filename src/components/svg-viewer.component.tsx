import { Box, styled } from '@mui/material';
import Image from 'next/image';
import exampleSVG from 'public/example.svg';

const SVGFrame = styled(Box)(() => ({
    flex: 1,
    minWidth: '50%',
    border: '5px solid #393E46',
    resize: 'both',
    overflow: 'auto',
}));

const SVGViewer = () => {
    return (
        <SVGFrame display="flex">
            <Image
                id="image"
                src={exampleSVG}
                alt={''}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
            />
        </SVGFrame>
    );
};

export default SVGViewer;
