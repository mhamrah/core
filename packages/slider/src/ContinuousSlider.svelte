<script lang="ts" context="module">
	let count = 0;
</script>

<script lang="ts">
	//#region Base
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `@smui/slider/ContinuousSlider:${count++}`;

	export let dom: HTMLDivElement = undefined;

	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = {};
	//#endregion

	// Slider
	import SliderImpl from "./SliderImpl.svelte";
	import { RangeSliderChangeEvent, SliderChangeEvent } from ".";
	import { createEventDispatcher } from "svelte";
	import { UseState } from "@raythurnevoid/svelte-hooks";

	export let min: number = 0;
	export let max: number = 100;
	export let value: number = min;

	export let disabled: boolean = false;

	export let ariaLabel: string = undefined;

	export let name: string = undefined;
	export let title: string = undefined;

	let innerValue: [number];
	$: innerValue = [value];

	const dispatch = createEventDispatcher<{
		change: SliderChangeEvent;
	}>();

	function handleInnerValueChange() {
		value = innerValue[0];
	}

	function handleChange({ dom, value }: RangeSliderChangeEvent) {
		dispatch("change", {
			dom,
			value: value[0],
		});
	}
</script>

<svelte:options immutable={true} />

<UseState value={innerValue} onUpdate={handleInnerValueChange} />

<SliderImpl
	class={className}
	{style}
	bind:dom
	bind:id
	bind:value={innerValue}
	bind:min
	bind:max
	bind:disabled
	{name}
	{title}
	{ariaLabel}
	{props}
	on:change={(e) => handleChange(e.detail)} />
