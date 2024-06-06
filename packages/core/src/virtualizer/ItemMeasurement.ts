import { type Offset } from '../types/Offset';
import { type Rect } from '../types/Rect';

export interface ItemMeasurement {
    index: number;
    start: Offset;
    size: Rect;
    end: Offset;
    visibility: number;
}
