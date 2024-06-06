export interface SearchTargetPage {
    numPages: number;
    pageIndex: number;
}

export type SearchTargetPageFilter = (targetPage: SearchTargetPage) => boolean;
