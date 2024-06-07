import { RotateDirection } from '../structs/RotateDirection';
import { type PdfJs } from './PdfJs';

export interface RotatePageEvent {
    direction: RotateDirection;
    doc: PdfJs.PdfDocument;
    pageIndex: number;
    rotation: number;
}
