<script lang="ts">
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { sDonkeyStore } from '../stores/donkeystore';

    import VocabPool from '../components/VocabPool.svelte';
    import PhraseMaker from '../components/PhraseMaker.svelte';
	import type { WordData_T } from '$lib/types';

    onMount(() => {
        console.log("Page mounted");
        console.log(get(sDonkeyStore));
        console.log("\n");
    });

    function pfPre() {
        console.log("pfPre");
    }

    // Turn into readable store? Retrieve from database?
    let vocab: WordData_T[] = [
        { dutch: "Hallo!", english: "Hello!", type: "FU", handler: null},
        { dutch: "Goede-", english: "Good-", type: "FU", handler: pfPre},
        { dutch: "-morgen", english: "-morning", type: "FU", handler: null},
        { dutch: "-middag", english: "-afternoon", type: "FU", handler: null},
        { dutch: "-avond", english: "-evening", type: "FU", handler: null},
        { dutch: "-nacht", english: "-night", type: "FU", handler: null},
        { dutch: "Mijn", english: "My", type: "PVNW", handler: null},
        { dutch: "Naam", english: "Name", type: "ZN", handler: null},
        { dutch: "Is", english: "Is", type: "BVNW", handler: null},
    ];

    let vocab_dict = {

    };
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