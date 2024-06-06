import { ScrollMode, ViewMode, type Store } from '@react-pdf-viewer/core';
import * as React from 'react';
import { SwitchScrollModeButton } from './SwitchScrollModeButton';
import { type RenderSwitchScrollModeProps } from './types/RenderSwitchScrollModeProps';
import { type StoreProps } from './types/StoreProps';
import { useScrollMode } from './useScrollMode';
import { useViewMode } from './useViewMode';
import { switchScrollMode } from './scrollModePlugin';

type RenderSwitchScrollMode = (props: RenderSwitchScrollModeProps) => React.ReactElement;

export interface SwitchScrollModeProps {
    children?: RenderSwitchScrollMode;
    mode: ScrollMode;
}

export const SwitchScrollMode: React.FC<{
    children?: RenderSwitchScrollMode;
    mode: ScrollMode;
    store: Store<StoreProps>;
}> = ({ children, mode, store }) => {
    const { viewMode } = useViewMode(store);
    const { scrollMode } = useScrollMode(store);

    const onClick = () => {
        switchScrollMode(store, mode);
    };

    const isSelected = scrollMode === mode;
    const isDisabled =
        (mode === ScrollMode.Horizontal || mode === ScrollMode.Wrapped) && viewMode !== ViewMode.SinglePage;

    const defaultChildren = (props: RenderSwitchScrollModeProps) => (
        <SwitchScrollModeButton
            isDisabled={isDisabled}
            isSelected={isSelected}
            mode={props.mode}
            onClick={props.onClick}
        />
    );
    const render = children || defaultChildren;

    return render({
        isDisabled,
        isSelected,
        mode,
        onClick,
    });
};
