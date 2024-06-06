import { SpecialZoomLevel } from '@rogo-technologies/react-pdf-viewer-core';

export interface RenderZoomProps {
    scale: number;
    onZoom(newScale: number | SpecialZoomLevel): void;
}
