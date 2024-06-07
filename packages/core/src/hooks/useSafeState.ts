'use client';

import * as React from 'react';
import { useIsMounted } from './useIsMounted';

export const useSafeState = <T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = React.useState(initialState);
    const useIsMountedRef = useIsMounted();

    const setSafeState = React.useCallback(
        (newState: React.SetStateAction<T>) => {
            if (useIsMountedRef.current) {
                setState(newState);
            }
        },
        [useIsMountedRef.current],
    );

    return [state, setSafeState];
};
