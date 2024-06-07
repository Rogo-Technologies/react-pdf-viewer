import { LoadError } from './LoadError';
import { LoadingStatus } from './LoadingStatus';

export class FailureState extends LoadingStatus {
    public error: LoadError;

    constructor(error: LoadError) {
        super();
        this.error = error;
    }
}
