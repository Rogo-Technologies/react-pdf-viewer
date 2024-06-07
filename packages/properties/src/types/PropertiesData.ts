import { type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';

export interface PropertiesData {
    fileName: string;
    info: PdfJs.MetaDataInfo;
    length: number;
}
