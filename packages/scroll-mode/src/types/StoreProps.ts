import { ScrollMode, ViewMode } from '@rogo-technologies/react-pdf-viewer-core';

export interface StoreProps {
    scrollMode: ScrollMode;
    viewMode: ViewMode;
    switchScrollMode(scrollMode: ScrollMode): void;
    switchViewMode(viewMode: ViewMode): void;
}
