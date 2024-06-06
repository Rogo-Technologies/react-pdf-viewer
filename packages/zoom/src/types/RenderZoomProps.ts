import { SpecialZoomLevel } from '@react-pdf-viewer/core';

export interface RenderZoomProps {
    scale: number;
    onZoom(newScale: number | SpecialZoomLevel): void;
}
