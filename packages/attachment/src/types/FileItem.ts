import { type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';

export interface FileItem {
    data: PdfJs.FileData;
    fileName: string;
}
