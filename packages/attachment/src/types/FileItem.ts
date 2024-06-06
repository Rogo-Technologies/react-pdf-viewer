import { type PdfJs } from '@react-pdf-viewer/core';

export interface FileItem {
    data: PdfJs.FileData;
    fileName: string;
}
