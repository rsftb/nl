<script lang="ts">
    import { onMount } from 'svelte';
    import { dataStore } from '../stores/store';
    import { get } from "svelte/store";

    import Word from './Word.svelte';

    export let vocab: { dutch: string, english: string, type: string, handler: () => void | null}[];
    let vocabsection_bind: HTMLDivElement;

    onMount(() => {
        console.log("VocabPool mounted");
        dataStore.setFirst(vocabsection_bind);
    });

</script>

<div bind:this={vocabsection_bind} id="vocabsection" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-gray-400 rounded-md p-3">
    {#each vocab as word}
        <Word {word} />
    {/each}
</div>
