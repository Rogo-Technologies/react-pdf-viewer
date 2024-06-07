import { type DivText } from './DivText';

export interface SelectionData {
    divTexts: DivText[];
    selectedText: string;
    startPageIndex: number;
    endPageIndex: number;
    startOffset: number;
    startDivIndex: number;
    endOffset: number;
    endDivIndex: number;
}
