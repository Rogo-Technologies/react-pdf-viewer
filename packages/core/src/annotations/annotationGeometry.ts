import { type PdfJs } from '../types/PdfJs';

// pdf.js 4.5+ transfers annotation geometry as flat `Float32Array`s of
// coordinates (`[x1, y1, x2, y2, ...]`) where older versions produced arrays of
// `{ x, y }` points. These helpers normalize both shapes to point lists so the
// annotation components keep a single code path.

export const toAnnotationPoints = (points: PdfJs.AnnotationPoint[] | Float32Array): PdfJs.AnnotationPoint[] => {
    if (!(points instanceof Float32Array)) {
        return points;
    }
    const result: PdfJs.AnnotationPoint[] = [];
    for (let i = 0; i + 1 < points.length; i += 2) {
        result.push({ x: points[i], y: points[i + 1] });
    }
    return result;
};

// Each quadrilateral consists of four points ordered top-left, top-right,
// bottom-left, bottom-right. pdf.js uses that order for both the legacy nested
// shape and the flat shape (eight coordinates per quadrilateral).
export const toQuadPoints = (quadPoints: PdfJs.AnnotationPoint[][] | Float32Array): PdfJs.AnnotationPoint[][] => {
    if (!(quadPoints instanceof Float32Array)) {
        return quadPoints;
    }
    const quads: PdfJs.AnnotationPoint[][] = [];
    for (let i = 0; i + 8 <= quadPoints.length; i += 8) {
        quads.push(toAnnotationPoints(quadPoints.subarray(i, i + 8)));
    }
    return quads;
};
