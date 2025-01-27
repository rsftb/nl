<!-- $components/VocabPool.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
    import { sDonkeyStore } from '$stores/storeComposer_Bridge';
    import type { WordData_T } from '$lib/types';
    import { get } from "svelte/store";

    import Word from './Word.svelte';

    export let vocab: WordData_T[];
    let vocabsection_ul_bind: HTMLUListElement;

    onMount(() => {
        console.log("VocabPool mounted");
        sDonkeyStore.setFirst(vocabsection_ul_bind);
    });
</script>

<div id="vocabsection-container" class="w-fit flex justify-center mx-auto bg-gray-400 rounded-md p-3">
    <ul bind:this={vocabsection_ul_bind} id="vocabsection-ul" class="bg-red-600 flex flex-wrap justify-items-center mx-auto h-10 rounded-lg">
        {#each vocab as word}
            <Word wordData={word} />
        {/each}
    </ul>
</div>

<style>
    div#vocabsection-container > ul#vocabsection-ul
    {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        /*width: fit-content;*/
        height: fit-content;
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: #eeeeee;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    div#vocabsection-container > ul#vocabsection-ul > button
    {
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
