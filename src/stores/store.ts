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
        addArray1: (data) => update((store) => {
            store.item1 = data;
            return store;
        }),
        addArray2: (data) => update((store) => {
            store.item2 = data;
            return store;
        }),
    };
}