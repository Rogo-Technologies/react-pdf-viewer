import * as React from 'react';
import { ScrollMode } from '../structs/ScrollMode';
import { type Rect } from '../types/Rect';

export const buildContainerStyles = (totalSize: Rect, scrollMode: ScrollMode): React.CSSProperties => {
    switch (scrollMode) {
        case ScrollMode.Horizontal:
            return {
                position: 'relative',
                height: '100%',
                width: `${totalSize.width}px`,
            };
        case ScrollMode.Vertical:
        default:
            return {
                position: 'relative',
                height: `${totalSize.height}px`,
                width: '100%',
            };
    }
};
