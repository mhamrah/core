import {
	createContextBuilder,
	createContextPropBuilder,
} from "../../../../packages/common";
import { ListItemDOMElement } from "../";
import { SelectableContext } from "../../../../packages/common/hoc";
import { ItemRole } from "../types";

const [createItemContext, getItemContext] = createContextBuilder<ItemContext>();
export { createItemContext, getItemContext };

export interface ItemContext extends SelectableContext {
	dom: ListItemDOMElement;
	value: string;
	selected: boolean;
	disabled: boolean;
	tabindex: number;
	role: ItemRole;
	notifySelected(selected: boolean): void;
	setTabIndex(tabindex: number): void;
}

export const [
	setIsSelectionGroup,
	getIsSelectionGroup,
] = createContextPropBuilder<boolean>();
