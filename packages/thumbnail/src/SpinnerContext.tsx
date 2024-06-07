'use client';

import { Spinner } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

export interface SpinnerContextProps {
    renderSpinner: () => React.ReactElement;
}

export const defaultSpinner = () => <Spinner />;

export const SpinnerContext = React.createContext<SpinnerContextProps>({
    renderSpinner: defaultSpinner,
});
