export class ArrayUtils {
    static matrixArrErrorMessage = `Your code should be a 2d array like: 
[
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
]`;

    static isSymmetric(arr: any[][]) {
        let leftIdx = 0,
            rightIdx = arr.length - 1;

        while (leftIdx < rightIdx) {
            if (arr[leftIdx].length !== arr[rightIdx].length) return false;

            leftIdx++;
            rightIdx--;
        }
        return true;
    }

    static parseStringTo2DArray(code: string): (string | number)[][] {
        const parsedCode = JSON.parse(code);

        if (!Array.isArray(parsedCode)) throw new Error(this.matrixArrErrorMessage);

        if (parsedCode.length === 0)
            throw new Error('you should have at least one row in your array');

        const is2dArray = parsedCode.every((row) => Array.isArray(row));
        if (!is2dArray) throw new Error(this.matrixArrErrorMessage);

        for (let i = 0; i < parsedCode.length; i++) {
            const row = parsedCode[i];

            if (!Array.isArray(row)) throw new Error(this.matrixArrErrorMessage);
            if (row.length === 0)
                throw new Error(`Row index: ${i} should have at least one element`);

            for (let j = 0; j < row.length; j++) {
                const element = row[j];
                if (typeof element !== 'string' && typeof element !== 'number')
                    throw new Error(
                        `Row index: ${i}, Element index: ${j} is neither a number nor a string`,
                    );
            }
        }

        if (!this.isSymmetric(parsedCode))
            throw new Error('Your array should shape a rectangle or square');

        return parsedCode;
    }
}
