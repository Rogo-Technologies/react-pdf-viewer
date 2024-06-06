import { type Store } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';

export const useTriggerOpen = (
    store: Store<StoreProps>,
): {
    inputRef: React.MutableRefObject<HTMLInputElement>;
    openFile: () => void;
} => {
    const inputRef = React.useRef<HTMLInputElement>();

    const openFile = () => {
        const inputEle = inputRef.current;
        if (inputEle) {
            inputEle.click();
            if (store.get('triggerOpenFile')) {
                store.update('triggerOpenFile', false);
            }
        }
    };

    const handleOpenFileTriggered = (trigger: boolean) => {
        if (trigger) {
            openFile();
        }
    };

    React.useEffect(() => {
        store.subscribe('triggerOpenFile', handleOpenFileTriggered);

        return () => {
            store.unsubscribe('triggerOpenFile', handleOpenFileTriggered);
        };
    }, []);

    return {
        inputRef,
        openFile,
    };
};
