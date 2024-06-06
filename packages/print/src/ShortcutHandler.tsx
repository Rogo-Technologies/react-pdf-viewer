import { isMac, type Store } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { PrintStatus } from './structs/PrintStatus';
import { type StoreProps } from './types/StoreProps';

export const ShortcutHandler: React.FC<{
    containerRef: React.RefObject<HTMLDivElement>;
    store: Store<StoreProps>;
}> = ({ containerRef, store }) => {
    const [element, setElement] = React.useState(containerRef.current);

    React.useEffect(() => {
        if (containerRef.current !== element) {
            setElement(containerRef.current);
        }
    }, []);

    const handleDocumentKeyDown = React.useCallback(
        (e: KeyboardEvent) => {
            if (!element || e.shiftKey || e.altKey || e.key !== 'p') {
                return;
            }
            const isCommandPressed = isMac() ? e.metaKey : e.ctrlKey;
            if (!isCommandPressed) {
                return;
            }
            if (!document.activeElement || !element.contains(document.activeElement)) {
                return;
            }

            e.preventDefault();
            store.update('printStatus', PrintStatus.Preparing);
        },
        [element],
    );

    React.useEffect(() => {
        if (!element) {
            return;
        }
        document.addEventListener('keydown', handleDocumentKeyDown);

        return () => {
            document.removeEventListener('keydown', handleDocumentKeyDown);
        };
    }, [element]);

    return <></>;
};
