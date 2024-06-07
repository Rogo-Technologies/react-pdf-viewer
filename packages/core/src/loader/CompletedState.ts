import { type PdfJs } from '../types/PdfJs';
import { LoadingStatus } from './LoadingStatus';

export class CompletedState extends LoadingStatus {
    public doc: PdfJs.PdfDocument;

    constructor(doc: PdfJs.PdfDocument) {
        super();
        this.doc = doc;
    }
}
