import { type Store } from '@react-pdf-viewer/core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';
import { useZoom } from './useZoom';

export interface RenderCurrentScaleProps {
    scale: number;
}

type RenderCurrentScale = (props: RenderCurrentScaleProps) => React.ReactElement;

export interface CurrentScaleProps {
    children?: RenderCurrentScale;
}

export const CurrentScale: React.FC<{
    children?: RenderCurrentScale;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { scale } = useZoom(store);

    const defaultChildren = (props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>;
    const render = children || defaultChildren;

    return render({ scale });
};
