<!-- $routes/Exercises/+page.svelte -->

<script lang="ts">
    import { serverGetExercise } from '$lib/getvocab';
	import { setContext } from 'svelte';
	import type { ExerciseContext_T } from '$lib/types';

	let ExerciseContext: ExerciseContext_T = {
		Vocab: [],
		PB: null,
		VP: null
	};

    function set_exercise_context(n: number) {
        async () => serverGetExercise(n).then((vocab) => {ExerciseContext.Vocab = vocab}, (error: Function) => {error()});
        setContext('ExerciseContext', ExerciseContext);
    };

</script>

<main>
    <header class="my-5">
        <h1>Select exercise</h1>
    </header>

    <ul class="my-5"> <!-- {#each} -->
        <li><a onclick={() => set_exercise_context(1)} href="/Composer">Test exercise 1</a></li>
        <li><a onclick={() => set_exercise_context(2)} href="/Composer">Test exercise 2</a></li>
    </ul>
</main>
