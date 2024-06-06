import * as React from 'react';
import { DefaultToobar } from './DefaultToobar';
import { type ToolbarSlot } from './types/ToolbarSlot';

export type RenderToolbarSlot = (toolbarSlot: ToolbarSlot) => React.ReactElement;

export interface ToolbarProps {
    children?: RenderToolbarSlot;
}

export const Toolbar: React.FC<{
    children?: RenderToolbarSlot;
    slot: ToolbarSlot;
}> = ({ children, slot }) => {
    const render = children || DefaultToobar;
    return render(slot);
};
