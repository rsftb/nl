<script lang="ts">
    import Word from './Word.svelte';
	import { onMount } from 'svelte';

    export let vocab;

    function handleWordClick(eWord) {
        console.log("Word clicked");
        if (typeof onWordSelected === 'function') {
            onWordSelected(eWord);
        }
    };

    onMount(() => {
        console.log("VocabPool mounted");
    });
</script>

<div id="vocabsection" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-orange-300">
    {#each vocab as word}
        <Word {word} on:click={(e) => handleWordClick(e)} />
    {/each}
</div>
