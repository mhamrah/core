<script lang="ts" context="module">
	let count: number = 0;
</script>

<script lang="ts">
	//#region imports
	import type { ButtonColor, ButtonVariant } from ".";
	import { Button as InternalButton } from "./internal";
	//#endregion

	//#region exports
	//#region base
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `@svmd/button/Button:${count++}`;
	export let dom: HTMLButtonElement | HTMLAnchorElement = undefined;
	//#endregion

	export let ripple: boolean = true;
	export let color: ButtonColor = "primary";
	export let variant: ButtonVariant = "text";
	export let disabled: boolean = false;
	export let href: string = undefined;
	export let accessibleTouch: boolean = false;
	//#endregion

	//#region implementation
	//#endregion
</script>

<svelte:options immutable={true} />

<InternalButton
	bind:dom
	{id}
	class={className}
	{variant}
	{ripple}
	{color}
	{style}
	{disabled}
	{href}
	{accessibleTouch}
	{...$$restProps}
	on:click
	on:mousedown
	on:mouseup
	on:keydown
	on:keyup
	on:focus
	on:blur>
	<slot />
</InternalButton>
