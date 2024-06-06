import * as React from 'react';
import { PasswordStatus } from '../structs/PasswordStatus';

export interface RenderProtectedViewProps {
    passwordStatus: PasswordStatus;
    verifyPassword: (password: string) => void;
}

export type RenderProtectedView = (renderProps: RenderProtectedViewProps) => React.ReactElement;
