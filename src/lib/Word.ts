// Word.ts

import { get } from "svelte/store";

import { sDonkeyStore } from "../stores/donkeystore";
import { sPhraseParserStore } from "../stores/phraseparserstore";

import type { WordData_T } from "./types";


export function f(e: MouseEvent, worddata: WordData_T) {
    const data = get(sDonkeyStore);
    const target = e.target as Node;

    //console.log(data);

    if (data.item1.contains(target))
    {
        sPhraseParserStore.push([target as HTMLButtonElement, {}]);
        // Switch button to PhraseMaker container
        // Pass handler to PhraseMaker parser
        data.item2.appendChild(target);
    }
    else if (data.item2.contains(e.target as Node))
    {
        // Switch button to PhraseBuilder container
        // Remove handler from PhraseMaker parser
        data.item1.appendChild(target);
    }
    else
        throw new Error("Element not found in either container");
}