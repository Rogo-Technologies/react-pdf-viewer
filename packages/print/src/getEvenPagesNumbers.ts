import { type PdfJs } from '@react-pdf-viewer/core';

export const getEvenPagesNumbers = (doc: PdfJs.PdfDocument): number[] =>
    Array(doc.numPages)
        .fill(0)
        .map((_, i) => i)
        .filter((i) => (i + 1) % 2 === 0);
