<!-- $routes/Exercises/+layout.svelte -->

<script lang="ts">
	import '../app.css';

	let { children, data } = $props();
</script>


{@render children()}
