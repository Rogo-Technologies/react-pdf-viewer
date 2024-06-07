'use client';

import { type Store, type StoreHandler } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';

export const useNumberOfPages = (store: Store<StoreProps>): { numberOfPages: number } => {
    // It's safer to set the initial state from `store.get('numberOfPages')` instead of `0`.
    // There's a case that a component is loaded within a portal
    // so the hook `useEffect` usage below isn't triggered
    const [numberOfPages, setNumberOfPages] = React.useState(store.get('numberOfPages') || 0);

    const handleNumberOfPages: StoreHandler<number> = (total: number) => {
        setNumberOfPages(total);
    };

    React.useEffect(() => {
        store.subscribe('numberOfPages', handleNumberOfPages);

        return () => {
            store.unsubscribe('numberOfPages', handleNumberOfPages);
        };
    }, []);

    return { numberOfPages };
};
