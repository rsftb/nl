// lib/class.svelte.js

export class ReactiveState {
    value = $state();
    constructor(initialValue) {
        this.value = initialValue
    }
}