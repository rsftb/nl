<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Page mounted");
    });


    function fPreloadExercise(num: number) : void
    {
        if (num === 1)
        {
            console.log("Preloading exercise 1");
        }
        else if (num === 2)
        {
            console.log("Preloading exercise 2");
        }
    }
</script>

<main>
    <header class="my-5">
        <h1>Select exercise</h1>
    </header>

    <ul class="my-5">
        <li><a href="/Composer/1">Test exercise 1</a></li>
        <li><a href="/Composer/2">Test exercise 2</a></li>
    </ul>
</main>
