import { type PdfJs } from '@react-pdf-viewer/core';

export const getAllPagesNumbers = (doc: PdfJs.PdfDocument): number[] =>
    Array(doc.numPages)
        .fill(0)
        .map((_, i) => i);
