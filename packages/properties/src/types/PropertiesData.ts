import { type PdfJs } from '@react-pdf-viewer/core';

export interface PropertiesData {
    fileName: string;
    info: PdfJs.MetaDataInfo;
    length: number;
}
