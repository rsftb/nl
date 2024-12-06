// Word.ts

import { get } from "svelte/store";

import { sDonkeyStore } from "../stores/donkeystore";
import { sPhraseParserStore } from "../stores/phraseparserstore";

import type { WordData_T } from "./types";


export function parseWord(e: MouseEvent, worddata: WordData_T) {
    const data = get(sDonkeyStore);
    const target = e.target as Node;

    //console.log(data);

    if (data.item1.contains(target))
    {
        sPhraseParserStore.push([target as HTMLButtonElement, worddata]);
        //worddata.handler ? worddata.handler() : null;
        data.item2.appendChild(target);
    }
    else if (data.item2.contains(e.target as Node))
    {
        sPhraseParserStore.pop();
        data.item1.appendChild(target);
    }
    else
        throw new Error("Element not found in either container");
}