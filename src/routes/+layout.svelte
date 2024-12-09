<script lang="ts">
	import '../app.css';
	import { invalidateAll } from '$app/navigation';

	let { children/*, data*/ } = $props();
    //console.log(`Root +layout: ${JSON.stringify(data)}`);
</script>

{@render children()}
