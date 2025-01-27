<!-- $routes/Exercises/+layout.svelte -->

<script lang="ts">
	import '../app.css';
	//import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	let { children, data } = $props();
	const user = data.user;

	onMount(() => {
		console.log(`/+layout.svelte: ${user.value}`);
	});
</script>

{@render children()}
