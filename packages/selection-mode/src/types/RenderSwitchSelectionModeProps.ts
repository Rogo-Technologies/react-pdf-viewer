import { SelectionMode } from '../structs/SelectionMode';

export interface RenderSwitchSelectionModeProps {
    isSelected: boolean;
    mode: SelectionMode;
    onClick(): void;
}
