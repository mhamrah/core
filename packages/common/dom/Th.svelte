<script lang="ts">
	//#region Base
	import { DOMEventsForwarder } from "../src/actions";
	const forwardDOMEvents = DOMEventsForwarder();
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = undefined;

	export let dom: HTMLTableHeaderCellElement = null;

	import { BaseProps } from "./Props";
	export let props: BaseProps = {};
	//#endregion

	// Th
</script>

<th
	bind:this={dom}
	{...props}
	{id}
	class={className}
	{style}
	use:forwardDOMEvents>
	<slot />
</th>
