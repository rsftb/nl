
import { getContext } from 'svelte';

export const load = async () => {
    return getContext('ExerciseContext');
}
