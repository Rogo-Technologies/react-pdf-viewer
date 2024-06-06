import {
    MinimalButton,
    Position,
    Tooltip,
    isMac,
    type Store,
    type StoreHandler,
} from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { ShowSearchPopoverDecorator } from './ShowSearchPopoverDecorator';
import { type StoreProps } from './types/StoreProps';

export const ShowSearchPopoverButton: React.FC<{
    enableShortcuts: boolean;
    store: Store<StoreProps>;
    onClick(): void;
}> = ({ enableShortcuts, store, onClick }) => {
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+F' : 'Ctrl+F') : '';

    const handleShortcutsPressed: StoreHandler<boolean> = (areShortcutsPressed: boolean) => {
        if (areShortcutsPressed) {
            onClick();
        }
    };

    React.useEffect(() => {
        store.subscribe('areShortcutsPressed', handleShortcutsPressed);

        return () => {
            store.unsubscribe('areShortcutsPressed', handleShortcutsPressed);
        };
    }, []);

    return (
        <ShowSearchPopoverDecorator onClick={onClick}>
            {(p) => (
                <Tooltip
                    ariaControlsSuffix="search-popover"
                    position={Position.BottomCenter}
                    target={
                        <MinimalButton
                            ariaKeyShortcuts={ariaKeyShortcuts}
                            ariaLabel={p.label}
                            testId="search__popover-button"
                            onClick={onClick}
                        >
                            {p.icon}
                        </MinimalButton>
                    }
                    content={() => p.label}
                />
            )}
        </ShowSearchPopoverDecorator>
    );
};
