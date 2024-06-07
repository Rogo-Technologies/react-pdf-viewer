import { type OpenFile } from './OpenFile';
import { type PdfJs } from './PdfJs';

export interface DocumentLoadEvent {
    doc: PdfJs.PdfDocument;
    file: OpenFile;
}
