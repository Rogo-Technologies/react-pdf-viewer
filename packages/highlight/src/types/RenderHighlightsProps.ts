import * as React from 'react';
import { type HighlightArea } from './HighlightArea';

export interface RenderHighlightsProps {
    getCssProperties(area: HighlightArea, rotation: number): React.CSSProperties;
    pageIndex: number;
    rotation: number;
}
