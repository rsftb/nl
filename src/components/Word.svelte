<script>
    import { ToggleSection } from '$lib/utils.js';
    export let word;
</script>

<button class="cursor-pointer flex flex-col justify-center gap-0 bg-gray-200 items-center p-1 m-1" on:click={(event) => ToggleSection(event.currentTarget)}>
    <span class="border-b-2 border-b-gray-400">{word.dutch}</span>
    <span class="border-t-2 border-t-gray-400">{word.english}</span>
</button>

<style>
    span {
        pointer-events: none;
    }
</style>
