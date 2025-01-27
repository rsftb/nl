// storeComposer_Bridge.ts

import { writable } from "svelte/store";

function storeComposer_Bridge() {
    const { subscribe, set, update } = writable({
        item1: undefined, // HTMLUListElement
        item2: undefined, // HTMLUListElement
    });

    return {
        subscribe,
        set,
        update,
        setFirst: (data: HTMLButtonElement) => update((store) => {
            store.item1 = data;
            return store;
        }),
        setSecond: (data: HTMLButtonElement) => update((store) => {
            store.item2 = data;
            return store;
        }),
    };
}

export const storeBridge = storeComposer_Bridge();
