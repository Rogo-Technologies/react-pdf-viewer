import { SpecialZoomLevel } from '../structs/SpecialZoomLevel';

export type DestinationOffsetFromViewport = (viewportWidth: number, viewportHeight: number) => number;

export interface Destination {
    bottomOffset: number | DestinationOffsetFromViewport;
    label?: string;
    leftOffset: number | DestinationOffsetFromViewport;
    pageIndex: number;
    scaleTo?: number | SpecialZoomLevel;
}
