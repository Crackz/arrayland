import { Land } from '@/interfaces/land.interface';
import { ReactNode, SVGProps } from 'react';

const SVGGenerator = ({ arr2D, lands }: { arr2D: (string | number)[][]; lands: Land[] }) => {
    const valuesColors = new Map<Land['value'], Land['hexColor']>();
    lands.forEach((land) => valuesColors.set(land.value, land.hexColor));

    const scaler = 50,
        recWidth = 1 * scaler,
        recHeight = 1 * scaler;

    const rowsCount = arr2D.length,
        colsCount = arr2D[0].length;
    const imgX = colsCount * scaler,
        imgY = rowsCount * scaler;

    const rects: SVGProps<SVGRectElement>[] = [];

    for (let row = 0; row < rowsCount; row++) {
        for (let col = 0; col < colsCount; col++) {
            const color =
                valuesColors.get(arr2D[row][col].toString()) || valuesColors.get('DEFAULT');

            rects.push(
                <rect
                    x={col * scaler}
                    y={row * scaler}
                    width={recWidth}
                    height={recHeight}
                    fill={color}
                />,
            );
        }
    }

    return (
        <svg height="100%" width="100%" viewBox={`0 0 ${imgX} ${imgY}`} preserveAspectRatio="none">
            ${...rects as ReactNode[]}
        </svg>
    );
};

export default SVGGenerator;
