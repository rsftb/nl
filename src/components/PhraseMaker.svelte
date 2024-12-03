<script>
    import { onMount } from 'svelte';
    import { elems } from '../stores/store';

    let phrasebuilder_ul_bind;

    elems.set(phrasebuilder_ul_bind);
</script>

<div id="phrasebuilder-container" class="w-screen bg-red-300">
    <ul bind:this={phrasebuilder_ul_bind} id="phrasebuilder-ul" class="bg-red-500 mx-auto w-[50%] h-10 rounded-lg">
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
        background-color: #f1f1f1;
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
