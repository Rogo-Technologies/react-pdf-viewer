export interface VisiblePagesRange {
    endPage: number;
    numPages: number;
    startPage: number;
}

export type SetRenderRange = (visiblePagesRange: VisiblePagesRange) => { endPage: number; startPage: number };
