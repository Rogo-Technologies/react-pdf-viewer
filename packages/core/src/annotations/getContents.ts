import { type PdfJs } from '../types/PdfJs';

export const getContents = (annotation: PdfJs.Annotation): string => {
    // `contents` property is deprecated
    return annotation.contentsObj ? annotation.contentsObj.str : annotation.contents || '';
};
