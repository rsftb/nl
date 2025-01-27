// $lib/Word.ts

import { get } from "svelte/store";

import { sDonkeyStore } from "$stores/storeComposer_Bridge";
import { sPhraseParserStore } from "$stores/storeComposer_Parser";

import type { WordData_T } from "./types";


export function parseWord(e: MouseEvent, worddata: WordData_T) {
    const donkeystore = get(sDonkeyStore);
    const target = e.target as Node;

    //console.log(data);

    if (donkeystore.item1.contains(target))
    {
        sPhraseParserStore.push([target as HTMLButtonElement, worddata]);
        donkeystore.item2.appendChild(target);
    }
    else if (donkeystore.item2.contains(target))
    {
        sPhraseParserStore.remove(target as HTMLButtonElement);
        donkeystore.item1.appendChild(target);
    }
    else
        throw new Error("Element not found in either container");
}
