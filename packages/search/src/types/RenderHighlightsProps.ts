import * as React from 'react';

export interface HighlightArea {
    keyword: RegExp;
    keywordStr: string;
    numPages: number;
    pageIndex: number;
    // The position of the highlight element in percentages
    left: number;
    top: number;
    // The size of the highlight element in percentages
    height: number;
    width: number;
    // The size of the page in pixels
    pageHeight: number;
    pageWidth: number;
}

export interface RenderHighlightsProps {
    getCssProperties(area: HighlightArea): React.CSSProperties;
    highlightAreas: HighlightArea[];
}
