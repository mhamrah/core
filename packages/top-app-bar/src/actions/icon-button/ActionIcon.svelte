<script lang="ts">
	//#region imports
	import "../../../../icon-button";
	import { IconButton } from "../../../../icon-button/src/internal";
	import { parseClassList } from "../../../../common/functions";
	import type { IconButtonDOM, IconButtonColor } from ".";
	import { setActionType } from "../ActionsContext";
	//#endregion

	//#region exports
	//#region base
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = undefined;
	export let dom: IconButtonDOM = undefined;
	//#endregion

	export let ripple: boolean = true;
	export let color: IconButtonColor = undefined;
	export let disabled: boolean = false;
	//#endregion

	//#region implementation
	setActionType("icon");
	//#endregion
</script>

<svelte:options immutable={true} />

<IconButton
	bind:dom
	{id}
	class={parseClassList([className, 'mdc-top-app-bar__action-item'])}
	{style}
	{disabled}
	{color}
	{ripple}
	{...$$restProps}
	on:click
	on:mousedown
	on:mouseup
	on:keydown
	on:keyup
	on:focus
	on:blur>
	<slot />
</IconButton>
