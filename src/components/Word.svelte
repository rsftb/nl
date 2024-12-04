<script lang="ts">
	//import { on } from 'svelte/events';
    import { dataStore } from "../stores/store";
    import { get } from "svelte/store";

    export let word;
    let button: HTMLButtonElement;

    function f(e: MouseEvent) {
        console.log(e.target);
        if (get(dataStore).item1.contains(e.target as Node))
        {
            console.log("First container");
        } else if (get(dataStore).item2.contains(e.target as Node))
        {
            console.log("Second container");
        }
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
