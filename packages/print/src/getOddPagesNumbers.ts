import { type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';

export const getOddPagesNumbers = (doc: PdfJs.PdfDocument): number[] =>
    Array(doc.numPages)
        .fill(0)
        .map((_, i) => i)
        .filter((i) => (i + 1) % 2 === 1);
