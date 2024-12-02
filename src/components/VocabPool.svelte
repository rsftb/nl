<script>
    import Word from './Word.svelte';
    export let vocab;
</script>


<div id="builder-section-vocab" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-orange-300">
    {#each vocab as word}
        <Word {word} {fToggleSection} />
    {/each}
</div>
