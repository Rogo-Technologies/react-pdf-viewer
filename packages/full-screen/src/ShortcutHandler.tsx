import { isMac, type Store } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';
import { useEnterFullScreen } from './useEnterFullScreen';

export const ShortcutHandler: React.FC<{
    containerRef: React.RefObject<HTMLDivElement>;
    getFullScreenTarget(pagesContainer: HTMLElement): HTMLElement;
    store: Store<StoreProps>;
}> = ({ containerRef, getFullScreenTarget, store }) => {
    const [element, setElement] = React.useState(containerRef.current);

    React.useEffect(() => {
        if (containerRef.current !== element) {
            setElement(containerRef.current);
        }
    }, []);

    const { enterFullScreen } = useEnterFullScreen(getFullScreenTarget, store);

    const handleDocumentKeyDown = React.useCallback(
        (e: KeyboardEvent) => {
            if (!element || e.shiftKey || e.altKey) {
                return;
            }
            const areShortcutsPressed = isMac() ? e.metaKey && e.ctrlKey && e.key === 'f' : e.key === 'F11';
            if (!areShortcutsPressed) {
                return;
            }
            if (!document.activeElement || !element.contains(document.activeElement)) {
                return;
            }

            e.preventDefault();
            enterFullScreen();
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
