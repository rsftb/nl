<script>
    import Word from './Word.svelte';

    import { elems } from '../stores/store';
    import { get } from 'svelte/store';
	import { onMount } from 'svelte';

    export let vocab;
    export let phrasebar;

    console.log(phrasebar);

    let fToggleSection = (eWord) => {
        console.log(eWord);
        console.log(get(elems));
        console.log(phrasebar);
        phrasebar.innerHTML += "ABCDEFUHIADHJOKLAD";
    };

    onMount(() => {
        console.log("VocabPool mounted");
        const elements = get(elems);
        console.log(JSON.stringify(elements));
    });
</script>

<div id="vocabsection" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-orange-300">
    {#each vocab as word}
        <Word {word} {fToggleSection} />
    {/each}
</div>
