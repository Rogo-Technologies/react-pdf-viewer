import { SelectionMode } from '../structs/SelectionMode';

export interface StoreProps {
    getPagesContainer?(): HTMLElement;
    selectionMode?: SelectionMode;
}
