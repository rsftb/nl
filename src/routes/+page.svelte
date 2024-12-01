<script>
    import { onMount } from 'svelte';
    import { readable, writable } from 'svelte/store';
    import Word from '../components/Word.svelte';

    let vocab = [
        { dutch: "Hallo!", english: "Hello!"},
        { dutch: "Goede-", english: "Good-"},
        { dutch: "-morgen", english: "-morning"},
        { dutch: "-middag", english: "-afternoon"},
        { dutch: "-avond", english: "-evening"},
        { dutch: "-nacht", english: "-night"},
        { dutch: "Ik", english: "I"},
        { dutch: "Jij", english: "You"},
        { dutch: "Heb", english: "Have"},
        { dutch: "Hebt", english: "Have"},
        { dutch: "Ben", english: "Are"},
        { dutch: "Bent", english: "Are"},
        { dutch: "Een", english: "A"},
        { dutch: "En", english: "And"},
        { dutch: "Kat", english: "Cat"},
        { dutch: "Hond", english: "Dog"},
        { dutch: "Man", english: "Man"},
        { dutch: "Vrouw", english: "Vrouw"},
        { dutch: "Leuk", english: "Nice"},
        { dutch: "Stom", english: "Not nice"}
    ];
</script>

<main id="main" class="h-screen content-center bg-red-200">

<section id="" class="flex flex-col justify-center gap-5 w-auto h-[80%] bg-green-200">

    <div id="builder-section-vocab" class="w-fit max-w-[50%] flex-wrap flex justify-center mx-auto bg-orange-300">
        {#each vocab as word}
            <Word {word} />
        {/each}
    </div>

    <div id="builder-section-phrase" class="w-screen bg-red-300">
        <div class="bg-red-500 mx-auto w-[50%] h-10 rounded-lg"></div>
    </div>


</section>

</main>
