export interface CoverProps {
    getPageIndex?({ numPages }: { numPages: number }): number;
    width?: number;
}
