import { type PdfJs } from './PdfJs';

export interface PageChangeEvent {
    currentPage: number;
    doc: PdfJs.PdfDocument;
}
