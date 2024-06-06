import { LoadingStatus } from './LoadingStatus';

export class LoadingState extends LoadingStatus {
    public percentages: number;
    constructor(percentages: number) {
        super();
        this.percentages = percentages;
    }
}
