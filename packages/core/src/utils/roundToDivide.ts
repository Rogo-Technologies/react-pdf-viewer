export const roundToDivide = (a: number, b: number): number => {
    const remainder = a % b;
    return remainder === 0 ? a : Math.floor(a - remainder);
};
