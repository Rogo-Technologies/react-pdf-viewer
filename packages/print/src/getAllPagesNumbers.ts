import { type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';

export const getAllPagesNumbers = (doc: PdfJs.PdfDocument): number[] =>
    Array(doc.numPages)
        .fill(0)
        .map((_, i) => i);
