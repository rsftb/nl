import { writable } from "svelte/store";

export function f() {
    const { subscribe, set, update } = writable<string>();

    return {
        subscribe,
        set,
        update
    };
}

export const storePhraseParser = f();