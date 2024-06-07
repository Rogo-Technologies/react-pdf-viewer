import { ViewMode } from '@rogo-technologies/react-pdf-viewer-core';

export interface RenderSwitchViewModeProps {
    isDisabled: boolean;
    isSelected: boolean;
    mode: ViewMode;
    onClick(): void;
}
