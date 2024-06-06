import { type Destination } from '@react-pdf-viewer/core';
import { Trigger } from '../structs/Trigger';
import { type HighlightState } from './HighlightState';

export interface StoreProps {
    jumpToDestination?(destination: Destination): void;
    getPagesContainer?(): HTMLElement;
    highlightState: HighlightState;
    rotation?: number;
    trigger: Trigger;
}
