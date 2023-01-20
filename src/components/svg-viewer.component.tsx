import Image from 'next/image';
import exampleSVG from 'public/example.svg';

const SVGViewer = () => {
    return (
        <div id="imageArea">
            <Image
                id="image"
                src={exampleSVG}
                alt={''}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default SVGViewer;
