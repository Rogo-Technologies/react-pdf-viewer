import { ScrollMode, ViewMode } from '@react-pdf-viewer/core';

export interface StoreProps {
    scrollMode: ScrollMode;
    viewMode: ViewMode;
    switchScrollMode(scrollMode: ScrollMode): void;
    switchViewMode(viewMode: ViewMode): void;
}
