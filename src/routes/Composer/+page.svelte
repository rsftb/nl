<!-- $routes/Composer/+page.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { sDonkeyStore } from '$stores/storeComposer_Bridge.js';

    import VocabPool from '$components/VocabPool.svelte';
    import PhraseMaker from '$components/PhraseMaker.svelte';

    // import { getStores, navigating, page, updated } from '$app/stores';

    let { data } = $props();
    const vocab = data.data.value;

    onMount(() => {
        console.log("Page mounted");
        console.log(`Composer/+page.svelte: ${data.data.value}`);
        console.log(get(sDonkeyStore));
        console.log("\n");
    });
</script>

<main id="main" class="h-screen content-center bg-slate-500">

<section id="main-sb" class="flex flex-col justify-center gap-5 w-auto h-[80%] bg-green-200">

    <VocabPool {vocab} />
    <PhraseMaker />

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