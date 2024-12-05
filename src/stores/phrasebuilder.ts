import { writable } from "svelte/store";

type PhraseData = readonly [HTMLButtonElement, () => void];

export function fPhraseParserStore() {
    const { subscribe, set, update } = writable<PhraseData[]>([]);

    return {
        subscribe,
        push: (data: PhraseData) => update((store) => {
            store.push(data);
            return store;
        }),
        pop: () => update((store) => {
            store.pop();
            return store;
        })
    };
}

export const storePhraseParser = fPhraseParserStore();