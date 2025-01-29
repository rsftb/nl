<!-- Word.svelte -->

<script lang="ts">
    import { moveWord } from '$lib/Word';
    import type { WordData_T } from '$lib/types';

    let { wordData } = $props();

    console.log("Word: ", $state.snapshot(wordData));
    let button: HTMLButtonElement;
</script>

<button bind:this={button} class="cursor-pointer flex flex-col justify-center gap-0 bg-gray-200 items-center p-1 m-1" onclick={ (e) => moveWord(e, wordData) }>
    <span class="border-b-2 border-b-gray-400">{wordData.dutch}</span>
    <span class="border-t-2 border-t-gray-400">{wordData.english}</span>
</button>

<style>
    span {
        pointer-events: none;
    }
</style>
