/**
 * Return Tens of a number
 */
export const getTens = (x: number) => {
    if (!x || x < 1) return x;
    return Math.ceil(Math.round(x / 10)) * 10;
};
