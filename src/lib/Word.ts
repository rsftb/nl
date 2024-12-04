import { dataStore } from "../stores/store";
import { get } from "svelte/store";

export function f(e: MouseEvent) {
    const data = get(dataStore);
    const target = e.target as Node;

    console.log(data);

    if (data.item1.contains(target))
        data.item2.appendChild(target); //
    else if (data.item2.contains(e.target as Node))
        data.item1.appendChild(target);
    else
        throw new Error("Element not found in either container");
}