<script lang="ts">
	//#region  imports
	import { parseClassList } from "../../common/functions";
	import { A, Span } from "../../common/dom";
	//#endregion

	//#region exports
	//#region base
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = undefined;
	export let dom: HTMLAnchorElement | HTMLSpanElement = undefined;
	//#endregion

	export let href: string = undefined;
	//#endregion

	//#region implementation
	let component = href ? A : Span;
	//#endregion
</script>

<svelte:options immutable={true} />

<svelte:component
	this={component}
	bind:dom
	{id}
	class={parseClassList([className, 'mdc-top-app-bar__title'])}
	{style}
	{...$$restProps}>
	<slot />
</svelte:component>
