'use client';

import { FullScreenMode, type Store } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';

export const useEnterFullScreen = (
    getFullScreenTarget: (pagesContainer: HTMLElement) => HTMLElement,
    store: Store<StoreProps>,
): {
    enterFullScreen: () => void;
    exitFullScreen: () => void;
    isFullScreen: boolean;
} => {
    const [fullScreenMode, setFullScreenMode] = React.useState(store.get('fullScreenMode'));

    const handleFullScreenMode = React.useCallback((fullScreenMode: FullScreenMode) => {
        setFullScreenMode(fullScreenMode);
    }, []);

    const enterFullScreen = () => {
        const pagesContainer = store.get('getPagesContainer');
        if (!pagesContainer) {
            return;
        }
        const target = getFullScreenTarget(pagesContainer());
        store.get('enterFullScreenMode')(target);
    };

    const exitFullScreen = () => {
        store.get('exitFullScreenMode')();
    };

    React.useEffect(() => {
        store.subscribe('fullScreenMode', handleFullScreenMode);

        return (): void => {
            store.unsubscribe('fullScreenMode', handleFullScreenMode);
        };
    }, []);

    return {
        enterFullScreen,
        exitFullScreen,
        isFullScreen: fullScreenMode === FullScreenMode.Entering || fullScreenMode === FullScreenMode.Entered,
    };
};
