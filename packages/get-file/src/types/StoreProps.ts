import { type OpenFile, type PdfJs } from '@react-pdf-viewer/core';

export interface StoreProps {
    doc?: PdfJs.PdfDocument;
    file?: OpenFile;
}
