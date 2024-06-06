import { type PdfJs } from '../types/PdfJs';

export const getTitle = (annotation: PdfJs.Annotation): string => {
    // `title` property is deprecated
    return annotation.titleObj ? annotation.titleObj.str : annotation.title || '';
};
