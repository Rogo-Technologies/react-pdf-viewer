import * as React from 'react';
import { type HighlightArea } from './types/RenderHighlightsProps';

export const getCssProperties = (area: HighlightArea): React.CSSProperties => {
    return {
        left: `${area.left}%`,
        top: `${area.top}%`,
        height: `${area.height}%`,
        width: `${area.width}%`,
    };
};
