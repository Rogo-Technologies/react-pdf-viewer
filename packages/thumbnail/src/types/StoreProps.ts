import { RotateDirection, ViewMode, type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';

export interface StoreProps {
    currentPage?: number;
    doc?: PdfJs.PdfDocument;
    pagesRotation?: Map<number, number>;
    pageHeight?: number;
    pageWidth?: number;
    jumpToPage?(pageIndex: number): void;
    rotatePage(pageIndex: number, direction: RotateDirection): void;
    rotatedPage?: number;
    rotation?: number;
    viewMode: ViewMode;
}
