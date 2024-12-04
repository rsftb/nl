<script>
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { dataStore } from '../stores/store';

    import VocabPool from '../components/VocabPool.svelte';
    import PhraseMaker from '../components/PhraseMaker.svelte';

    onMount(() => {
        console.log("Page mounted");
        console.log(get(dataStore));
        console.log("\n");
    });

    // Turn into readable store? Retrieve from database?
    let vocab = [
        { dutch: "Hallo!", english: "Hello!", type: "GREETING"},
        { dutch: "Goede-", english: "Good-", type: "GREETING"},
        { dutch: "-morgen", english: "-morning", type: "GREETING"},
        { dutch: "-middag", english: "-afternoon", type: "GREETING"},
        { dutch: "-avond", english: "-evening", type: "GREETING"},
        { dutch: "-nacht", english: "-night", type: "GREETING"},
        { dutch: "Mijn", english: "My", type: "PVNW"},
        { dutch: "Naam", english: "Name", type: "ZN"},
        { dutch: "Is", english: "Is", type: "BVNW"},
    ];
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