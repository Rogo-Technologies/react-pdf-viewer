import { RotateDirection } from '@rogo-technologies/react-pdf-viewer-core';

export interface RenderRotateProps {
    direction: RotateDirection;
    onClick(): void;
}
