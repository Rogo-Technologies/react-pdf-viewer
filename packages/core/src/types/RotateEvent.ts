import { RotateDirection } from '../structs/RotateDirection';
import { type PdfJs } from './PdfJs';

export interface RotateEvent {
    direction: RotateDirection;
    doc: PdfJs.PdfDocument;
    rotation: number;
}
