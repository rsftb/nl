// $routes/Exercises/+layout.svelte

import { ReactiveState } from '$lib/class.svelte.js';

export const load = async () => {
	const user = new ReactiveState();

	let cookies = document.cookie;

	if (cookies.includes('user='))
	{
		//
	}
	else
	{
		user.value = undefined;
	}

	return { user }
}
