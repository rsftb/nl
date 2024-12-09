<script lang="ts">
	import { preloadData } from '$app/navigation';
    import { onMount } from 'svelte';

    let { data } = $props();
    data.data.value = 1;

    onMount(() => {
        console.log("Page mounted");
        console.log(`Exercises/+page.svelte: ${data.data.value}`);
    });

</script>

<main>
    <header class="my-5">
        <h1>Select exercise</h1>
    </header>

    <ul class="my-5">
        <li><a href="/Composer">Test exercise 1</a></li>
        <li><a href="/Composer">Test exercise 2</a></li>
    </ul>
</main>
