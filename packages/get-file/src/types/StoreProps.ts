import { type OpenFile, type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';

export interface StoreProps {
    doc?: PdfJs.PdfDocument;
    file?: OpenFile;
}
