import { SpecialZoomLevel } from '@rogo-technologies/react-pdf-viewer-core';

export interface StoreProps {
    scale?: number;
    zoom?(scale: number | SpecialZoomLevel): void;
}
