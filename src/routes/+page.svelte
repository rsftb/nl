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
    ];
</script>

<main id="main" class="h-screen content-center bg-red-200">

<section id="" class="w-auto h-[80%] bg-green-200">
<div id="builder" class="flex flex-row bg-green-600 h-[80%] w-auto px-1">

    <div id="builder-vocab" class="w-[40%] bg-orange-300">
        {#each vocab as word}
            <Word {word} />
        {/each}
    </div>

    <div id="builder-phrase" class="w-screen bg-red-300">
    </div>

</div>
</section>

</main>
