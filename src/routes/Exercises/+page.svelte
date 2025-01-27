<!-- $routes/Exercises/+page.svelte -->

<script lang="ts">
	//import { page } from '$app/stores';
	//import { preloadData } from '$app/navigation';

    import { serverGetExercise } from '$lib/getvocab';
    import { onMount } from 'svelte';

    const { data } = $props();

    onMount(() => {
        console.log(`Exercises/+page.svelte: ${data.data.value}`);
    });
</script>

<main>
    <header class="my-5">
        <h1>Select exercise</h1>
    </header>

    <ul class="my-5">
        <li><a onclick={async () => serverGetExercise(1).then((vocab) => {data.data.value = vocab}, (error: Function) => {error()})} href="/Composer">Test exercise 1</a></li>
        <li><a onclick={async () => serverGetExercise(2).then((vocab) => {data.data.value = vocab}, (error: Function) => {error()})} href="/Composer">Test exercise 2</a></li>
    </ul>
</main>
