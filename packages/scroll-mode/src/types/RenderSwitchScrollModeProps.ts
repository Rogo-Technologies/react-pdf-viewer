import { ScrollMode } from '@rogo-technologies/react-pdf-viewer-core';

export interface RenderSwitchScrollModeProps {
    isDisabled: boolean;
    isSelected: boolean;
    mode: ScrollMode;
    onClick(): void;
}
