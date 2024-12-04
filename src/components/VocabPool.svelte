<script lang="ts">
    import { onMount } from 'svelte';
    import type { Component } from 'svelte';
    import { dataStore } from '../stores/store';

    import Word from './Word.svelte';

    export let vocab: { dutch: string, english: string, type: string }[];
    let vocabsection_bind: HTMLDivElement;
    let cmpWord: Component;

    onMount(() => {
        console.log("VocabPool mounted");
        dataStore.setFirst(vocabsection_bind);
    });

</script>

<div bind:this={vocabsection_bind} id="vocabsection" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-orange-300">
    {#each vocab as word}
        <Word bind:this={cmpWord} {word} />
    {/each}
</div>
