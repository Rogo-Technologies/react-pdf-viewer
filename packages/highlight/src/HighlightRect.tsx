import * as React from 'react';
import { getCssProperties } from './transformArea';
import { type HighlightArea } from './types/HighlightArea';

export const HighlightRect: React.FC<{
    area: HighlightArea;
    rotation: number;
}> = ({ area, rotation }) => <div className="rpv-highlight__selected-text" style={getCssProperties(area, rotation)} />;
