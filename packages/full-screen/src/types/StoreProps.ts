import { FullScreenMode, SpecialZoomLevel } from '@react-pdf-viewer/core';

export interface StoreProps {
    enterFullScreenMode(target: HTMLElement): void;
    exitFullScreenMode(): void;
    fullScreenMode: FullScreenMode;
    getPagesContainer?(): HTMLElement;
    zoom(scale: number | SpecialZoomLevel): void;
}
