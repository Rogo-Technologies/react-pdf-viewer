import { type Store } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { ExitFullScreenButton } from './ExitFullScreenButton';
import { type StoreProps } from './types/StoreProps';
import { useEnterFullScreen } from './useEnterFullScreen';

export interface RenderExitFullScreenProps {
    onClick(): void;
}

type RenderExitFullScreen = (props: RenderExitFullScreenProps) => React.ReactElement;

export interface ExitFullScreenProps {
    children?: RenderExitFullScreen;
}

export const ExitFullScreen: React.FC<{
    children?: RenderExitFullScreen;
    getFullScreenTarget(pagesContainer: HTMLElement): HTMLElement;
    store: Store<StoreProps>;
}> = ({ children, getFullScreenTarget, store }) => {
    const { enterFullScreen, exitFullScreen, isFullScreen } = useEnterFullScreen(getFullScreenTarget, store);

    const defaultChildren = (props: RenderExitFullScreenProps) => <ExitFullScreenButton onClick={props.onClick} />;
    const render = children || defaultChildren;

    return (
        isFullScreen &&
        render({
            onClick: isFullScreen ? exitFullScreen : enterFullScreen,
        })
    );
};
