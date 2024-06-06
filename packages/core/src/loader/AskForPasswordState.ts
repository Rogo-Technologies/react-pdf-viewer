import { LoadingStatus } from './LoadingStatus';
import { PasswordStatus } from '../structs/PasswordStatus';

export class AskForPasswordState extends LoadingStatus {
    public verifyPassword: (password: string) => void;
    public passwordStatus: PasswordStatus;

    constructor(verifyPassword: (password: string) => void, passwordStatus: PasswordStatus) {
        super();
        this.verifyPassword = verifyPassword;
        this.passwordStatus = passwordStatus;
    }
}
