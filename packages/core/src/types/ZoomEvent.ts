import { type PdfJs } from './PdfJs';

export interface ZoomEvent {
    doc: PdfJs.PdfDocument;
    scale: number;
}
