import { RotateDirection } from '@rogo-technologies/react-pdf-viewer-core';

export interface StoreProps {
    rotate?(direction: RotateDirection): void;
    rotatePage?(pageIndex: number, direction: RotateDirection): void;
}
