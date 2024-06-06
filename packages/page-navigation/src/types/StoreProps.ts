import { type Destination, type PdfJs } from '@react-pdf-viewer/core';

export interface StoreProps {
    currentPage?: number;
    doc?: PdfJs.PdfDocument;
    jumpToDestination?(destination: Destination): void;
    jumpToNextDestination?(): void;
    jumpToNextPage(): void;
    jumpToPage?(pageIndex: number): void;
    jumpToPreviousDestination?(): void;
    jumpToPreviousPage(): void;
    numberOfPages?: number;
}
