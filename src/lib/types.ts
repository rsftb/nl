// types.ts

export type WordData_T = {
    dutch: string,
    english: string,
    type: string,
    handler: null | (() => void)
};

export type Section = readonly [HTMLButtonElement, WordData_T];