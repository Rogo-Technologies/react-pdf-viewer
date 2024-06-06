import { RotateDirection } from '@rogo-technologies/react-pdf-viewer-core';

export interface RenderRotatePageProps {
    onRotatePage(pageIndex: number, direction: RotateDirection): void;
}
