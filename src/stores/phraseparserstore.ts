// phrasebuilder.ts

import { writable } from "svelte/store";
import type { Section } from "$lib/types";


export function createPhraseParserStore() {
    const { subscribe, set, update } = writable<Section[]>([]);

    return {
        subscribe,
        push: (data: Section) => update((store) => {
            store.push(data);
            return store;
        }),
        pop: () => update((store) => {
            store.pop();
            return store;
        })
    };
}

export const sPhraseParserStore = createPhraseParserStore();