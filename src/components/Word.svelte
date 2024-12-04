<script lang="ts">
	//import { on } from 'svelte/events';
    import { dataStore } from "../stores/store";
    import { get } from "svelte/store";

    export let word;
    let button: HTMLButtonElement;

    function f(e: MouseEvent) {

        const data = get(dataStore);
        const target = e.target as Node;

        console.log(data);

        if (data.item1.contains(target))
            data.item2.appendChild(target);
        else if (data.item2.contains(e.target as Node))
            data.item1.appendChild(target);
        else
            throw new Error("Element not found in either container");

    }
</script>

<button bind:this={button} class="cursor-pointer flex flex-col justify-center gap-0 bg-gray-200 items-center p-1 m-1" on:click={(e) => f(e)}>
    <span class="border-b-2 border-b-gray-400">{word.dutch}</span>
    <span class="border-t-2 border-t-gray-400">{word.english}</span>
</button>

<style>
    span {
        pointer-events: none;
    }
</style>
