<script lang="ts">
    import { onMount } from 'svelte';
    import { elems } from '../stores/store';

    import Word from './Word.svelte';

    export let vocab;

    let vocabsection_bind;

    onMount(() => {
        console.log("VocabPool mounted");
    });
</script>

<div bind:this={vocabsection_bind} id="vocabsection" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-orange-300">
    {#each vocab as word}
        <Word {word} />
    {/each}
</div>
