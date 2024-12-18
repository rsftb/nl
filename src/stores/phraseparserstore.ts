// phrasebuilder.ts

import { writable } from "svelte/store";
import type { Section } from "$lib/types";


class PhraseParser {
    store: Section[] = [];

    constructor() {}

    push(data: Section) {
        this.store.push(data);
        console.log(this.store);
    }

    remove(button: HTMLElement) {
        /*
        for (let i = 0; i < this.store.length; i++) {
            if (Object.is(this.store[i][0], button)) {
                this.store.splice(i, 1);
            }
        }
        */
        const index = this.store.findIndex((section) => section[0] === button);
        this.store.splice(index, 1);
    }
}

// Turn into a readable?
export function createPhraseParserStore() {
    const { subscribe, update } = writable<PhraseParser>(new PhraseParser());

    subscribe((store) => {
        console.log("PhraseMaker storePhraseBuilder: ", store);
        if (!store.store.length) return;

        for (let i = 0; i < store.store.length; i++)
        {
            let handler = store.store[i][1].handler;
            handler ? handler() : null;
        }
    });

    return {
        push: (data: Section) => update((store) => {
            store.push(data);
            return store;
        }),
        remove: (button: HTMLButtonElement) => update((store) => {
            store.remove(button);
            return store;
        })
    };
}


export const sPhraseParserStore = createPhraseParserStore();