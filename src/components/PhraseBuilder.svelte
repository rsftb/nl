<!-- $components/PhraseMaker.svelte -->

<script lang="ts">
    import { getContext, onMount } from "svelte";
    import type { ExerciseContext_T } from '$lib/types';

    let ExerciseContext: ExerciseContext_T = getContext('ExerciseContext');
    let phrasebuilder_ul_bind: HTMLUListElement;

    onMount(() => {
        ExerciseContext.PB = phrasebuilder_ul_bind;
    });
</script>

<div id="phrasebuilder-container" class="w-screen flex justify-center">
    <ul bind:this={phrasebuilder_ul_bind} id="phrasebuilder-ul" class="bg-red-600 flex justify-items-center mx-auto w-[50%] h-10 rounded-lg">
    </ul>
</div>

<style>
    div#phrasebuilder-container > ul#phrasebuilder-ul
    {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        width: fit-content;
        height: fit-content;
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: #eeeeee;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    div#phrasebuilder-container > ul#phrasebuilder-ul > button
    {
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
