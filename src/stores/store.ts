import { writable } from "svelte/store";

function createDataStore() {
    const { subscribe, set, update } = writable({
        item1: undefined,
        item2: undefined,
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

export const dataStore = createDataStore();
