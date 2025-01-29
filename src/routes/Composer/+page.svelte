<!-- $routes/Composer/+page.svelte -->

<script lang="ts">
    import VocabPool from '$components/VocabPool.svelte';
    import PhraseBuilder from '$components/PhraseBuilder.svelte';

    import { onMount } from 'svelte';
    import { getContext } from 'svelte';

    let { data } = $props();
</script>

<main id="main" class="h-screen content-center bg-slate-500">

<section id="main-sb" class="flex flex-col justify-center gap-5 w-auto h-[80%] bg-green-200">

    <VocabPool />
    <PhraseBuilder />

</section>

</main>


<!--
        { dutch: "Ik", english: "I"},
        { dutch: "Jij", english: "You"},
        { dutch: "Heb", english: "Have"},
        { dutch: "Hebt", english: "Have"},
        { dutch: "Ben", english: "Am"},
        { dutch: "Bent", english: "Are"},
        { dutch: "Een", english: "A"},
        { dutch: "En", english: "And"},
        { dutch: "Kat", english: "Cat"},
        { dutch: "Hond", english: "Dog"},
        { dutch: "Man", english: "Man"},
        { dutch: "Vrouw", english: "Vrouw"},
        { dutch: "Leuke", english: "Nice"},
        { dutch: "Luie", english: "Lazy"}
-->