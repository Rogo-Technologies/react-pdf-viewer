import { type Store, type StoreHandler } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';

export const useZoom = (store: Store<StoreProps>): { scale: number } => {
    const [scale, setScale] = React.useState(store.get('scale') || 0);

    const handleScaleChanged: StoreHandler<number> = (currentScale: number) => {
        setScale(currentScale);
    };

    React.useEffect(() => {
        store.subscribe('scale', handleScaleChanged);

        return () => {
            store.unsubscribe('scale', handleScaleChanged);
        };
    }, []);

    return { scale };
};
