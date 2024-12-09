import { ReactiveState } from '$lib/class.svelte.js'

export const load = async () => {
	const data = new ReactiveState()

	return { data }
}
