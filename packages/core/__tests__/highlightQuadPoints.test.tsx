import { render } from '@testing-library/react';
import * as React from 'react';
import { Highlight } from '../src/annotations/Highlight';
import { type PdfJs } from '../src/types/PdfJs';

// pdf.js 4.5+ transfers `quadPoints` as a flat `Float32Array` (eight
// coordinates per quadrilateral, points ordered top-left, top-right,
// bottom-left, bottom-right) where older versions produced arrays of `{ x, y }`
// points. Rendering must support both shapes and produce identical output.

const page = {
    view: [0, 0, 612, 792],
} as PdfJs.Page;

const viewport = {
    transform: [1, 0, 0, 1, 0, 0],
} as unknown as PdfJs.ViewPort;

const baseAnnotation = {
    annotationType: 9,
    id: 'highlight-annotation',
    subtype: 'Highlight',
    rect: [10, 10, 80, 60],
    hasAppearance: true,
    contentsObj: {
        dir: 'ltr',
        str: 'A note',
    },
    borderStyle: {
        dashArray: [],
        horizontalCornerRadius: 0,
        style: 1,
        verticalCornerRadius: 0,
        width: 0,
    },
} as unknown as PdfJs.Annotation;

// Two quadrilaterals: [minX, minY, maxX, maxY] = [10, 40, 50, 60] and [20, 10, 80, 30]
const legacyQuadPoints: PdfJs.AnnotationPoint[][] = [
    [
        { x: 10, y: 60 },
        { x: 50, y: 60 },
        { x: 10, y: 40 },
        { x: 50, y: 40 },
    ],
    [
        { x: 20, y: 30 },
        { x: 80, y: 30 },
        { x: 20, y: 10 },
        { x: 80, y: 10 },
    ],
];

const flatQuadPoints = new Float32Array([10, 60, 50, 60, 10, 40, 50, 40, 20, 30, 80, 30, 20, 10, 80, 10]);

const renderHighlight = (quadPoints: PdfJs.AnnotationPoint[][] | Float32Array) => {
    const annotation = Object.assign({}, baseAnnotation, { quadPoints }) as PdfJs.Annotation;
    const { container } = render(<Highlight annotation={annotation} page={page} viewport={viewport} />);
    return Array.from(container.querySelectorAll<HTMLElement>('.rpv-core__annotation--highlight')).map((ele) => ({
        height: ele.style.height,
        left: ele.style.left,
        top: ele.style.top,
        width: ele.style.width,
    }));
};

test('Renders one highlight per quadrilateral for flat quadPoints (pdf.js 4.5+)', () => {
    const highlights = renderHighlight(flatQuadPoints);

    expect(highlights).toEqual([
        { height: '20px', left: '10px', top: '732px', width: '40px' },
        { height: '20px', left: '20px', top: '762px', width: '60px' },
    ]);
});

test('Flat quadPoints render exactly as the legacy point lists', () => {
    expect(renderHighlight(flatQuadPoints)).toEqual(renderHighlight(legacyQuadPoints));
});
