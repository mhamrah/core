<script context="module" lang="ts">
	let count = 0;

	export interface OnPageSizeChangeEventDetail {
		value: number;
	}
</script>

<script lang="ts">
	//#region Base
	import { parseClassList } from "../../../common/functions";
	import { DOMEventsForwarder } from "../../../common/actions";
	const forwardDOMEvents = DOMEventsForwarder();
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `../../../data-table/pagination/PageSize:${count++}`;

	export let dom: HTMLDivElement = undefined;

	import { BaseProps } from "../../../common/dom/Props";
	export let props: BaseProps = {};
	//#endregion

	// PageSize
	import { Option, Select, OnSelectChangeEventDetail } from "../../../select";
	import { createEventDispatcher } from "svelte";
	import { getPaginationContext } from "./PaginationContext";

	export let pageSizeOptions: number[] = [10, 20, 50];
	export let pageSize: number = pageSizeOptions[0];

	$: if (pageSizeOptions == null || pageSizeOptions.length === 0)
		pageSizeOptions = [10, 20, 50];
	$: if (pageSize == null) pageSize = pageSizeOptions[0];

	const dispatch = createEventDispatcher<{
		change: OnPageSizeChangeEventDetail;
	}>();

	const paginationContext$ = getPaginationContext();

	$: pageSizeSelectValue = "" + pageSize;

	$: $paginationContext$?.setPageSize(pageSize);

	function handlePageSizeChange(event: OnSelectChangeEventDetail) {
		pageSizeSelectValue = event.value;
		pageSize = Number(pageSizeSelectValue);
		dispatch("change", {
			value: pageSize,
		});
	}
</script>

<svelte:options immutable={true} />

<div
	bind:this={dom}
	{...props}
	{id}
	class={parseClassList([
		className,
		'mdc-data-table__pagination-rows-per-page',
	])}
	{style}
	use:forwardDOMEvents>
	<div class="mdc-data-table__pagination-rows-per-page-label">
		<slot />
	</div>

	<Select
		variant="outlined"
		class="mdc-data-table__pagination-rows-per-page-select"
		nullable={false}
		value={pageSizeSelectValue}
		on:change={(event) => handlePageSizeChange(event.detail)}>
		<div slot="options">
			{#each pageSizeOptions as option (option)}
				<Option value={'' + option}>{option}</Option>
			{/each}
		</div>
	</Select>
</div>
