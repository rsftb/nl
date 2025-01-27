// $lib/types.ts

export type WordData_T = {
    dutch: string,
    english: string,
    type: string,
    handler: null | (() => void)
};

export type Exercise_T = { [key: number]: WordData_T[]};

export type Section_T = readonly [HTMLButtonElement, WordData_T];
