export enum Strength {
    EMPTY,
    TOO_WEAK,
    WEAK,
    MEDIUM,
    STRONG,
}

export const StrengthProps: {
    [key: Strength | number]: {
        label: string, color: string,
    }; } = {
    [Strength.EMPTY]: { label: '', color: '' },
    [Strength.TOO_WEAK]: { label: 'Too weak!', color: '#F64A4A' },
    [Strength.WEAK]: { label: 'Weak', color: '#FB7C58' },
    [Strength.MEDIUM]: { label: 'Medium', color: '#F8CD65'},
    [Strength.STRONG]: { label: 'Strong', color: '#A4FFAF' },
};
