const generateUpperAlphabet = () => {
    return Math.floor(65 + Math.random() * 26);
};

const generateLowerAlphabet = () => {
    return Math.floor(97 + Math.random() * 26);
};

const generateNumber = () => {
    return Math.floor(48 + Math.random() * 10);
};

const generateSymbol = () => {
    return Math.floor(33 + Math.random() * 15);
};

const generateUniqueNumbers = (range: number, count: number): number[] => {
    const uniqueNumbers = new Set();

    if (range < count) {
        return [];
    }

    while (uniqueNumbers.size < count) {
        const number = Math.floor(Math.random() * range);
        uniqueNumbers.add(number);
    }

    return Array.from(uniqueNumbers) as number[];
};

export const generatePassword = ({
                              length, uppercase, lowercase, numbers,
                              symbols
                          }: {
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
}) => {
    const charCodeList: number[] = [];

    if (!uppercase && !lowercase && !numbers && !symbols) {
        return '';
    }

    while (charCodeList.length < length) {
        const pattern = Math.floor(Math.random() * 4);

        if (pattern === 0 && uppercase) {
            charCodeList.push(generateUpperAlphabet());
        } else if (pattern === 1 && lowercase) {
            charCodeList.push(generateLowerAlphabet());
        } else if (pattern === 2 && numbers) {
            charCodeList.push(generateNumber());
        } else if (pattern === 3 && symbols) {
            charCodeList.push(generateSymbol());
        }
    }

    if (charCodeList.length >= length) {
        const conditions = [uppercase, lowercase, numbers, symbols];
        const count = conditions.filter((condition) => condition).length;
        const position = generateUniqueNumbers(charCodeList.length, count);
        let index = 0;

        if (uppercase) {
            charCodeList[position[index++]] = generateUpperAlphabet();
        }
        if (lowercase) {
            charCodeList[position[index++]] = generateLowerAlphabet();
        }
        if (numbers) {
            charCodeList[position[index++]] = generateNumber();
        }
        if (symbols) {
            charCodeList[position[index++]] = generateSymbol();
        }
    }

    return String.fromCharCode(...charCodeList);
};
