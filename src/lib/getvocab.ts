import type { WordData_T } from "./types";

function assembleVocab(words: [number]) : WordData_T[] {
    console.log("assembleVocab(words: [number])");

    return []
}

function pfPre() {
    console.log("pfPre");
}

// Turn into readable store? Retrieve from database?
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
];

export { vocab };