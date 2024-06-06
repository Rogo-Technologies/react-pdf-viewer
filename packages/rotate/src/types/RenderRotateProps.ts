import { RotateDirection } from '@react-pdf-viewer/core';

export interface RenderRotateProps {
    direction: RotateDirection;
    onClick(): void;
}
