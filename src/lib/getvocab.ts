// $lib/getvocab.ts

import type { WordData_T, Exercise_T } from "./types";

// Where store handler functions?
const vocab: Exercise_T  = {
    1: [
        { dutch: "Hallo!", english: "Hello!", type: "FU", handler: null},
        { dutch: "Goede-", english: "Good-", type: "FU", handler: pfPre},
        { dutch: "-morgen", english: "-morning", type: "FU", handler: null},
        { dutch: "-middag", english: "-afternoon", type: "FU", handler: null},
        { dutch: "-avond", english: "-evening", type: "FU", handler: null},
        { dutch: "-nacht", english: "-night", type: "FU", handler: null},
        { dutch: "Mijn", english: "My", type: "PVNW", handler: null},
        { dutch: "Naam", english: "Name", type: "ZN", handler: null},
        { dutch: "Is", english: "Is", type: "BVNW", handler: null},
    ],
};

function pfPre() {
    console.log("Prefix");
}

export const serverGetExercise = async (n: number) : Promise<WordData_T[]> => {
    const exercise = vocab[n];
    console.log(exercise);

    if (exercise === undefined)
        throw new Error("Exercise not found");
    else
        return exercise;
}

// Turn into readable store? Retrieve from database?

/*
const vocab: WordData_T[] = [
    { dutch: "Hallo!", english: "Hello!", type: "FU", handler: null},
    { dutch: "Goede-", english: "Good-", type: "FU", handler: pfPre},
    { dutch: "-morgen", english: "-morning", type: "FU", handler: null},
    { dutch: "-middag", english: "-afternoon", type: "FU", handler: null},
    { dutch: "-avond", english: "-evening", type: "FU", handler: null},
    { dutch: "-nacht", english: "-night", type: "FU", handler: null},
    { dutch: "Mijn", english: "My", type: "PVNW", handler: null},
    { dutch: "Naam", english: "Name", type: "ZN", handler: null},
    { dutch: "Is", english: "Is", type: "BVNW", handler: null},
    { dutch: "Ik", english: "I", type: "PVNW", handler: null},
    { dutch: "Ben", english: "Am", type: "BVNW", handler: null},
    { dutch: "Nederlands", english: "Dutch", type: "BN", handler: null},
    { dutch: "Engels", english: "English", type: "BN", handler: null},
    { dutch: "Frans", english: "French", type: "BN", handler: null},
    { dutch: "Duits", english: "German", type: "BN	", handler: null},
];
*/
