'use client';

import * as React from 'react';
import { renderDefaultToolbar } from './renderDefaultToolbar';
import { type ToolbarSlot } from './types/ToolbarSlot';
import { type TransformToolbarSlot } from './types/TransformToolbarSlot';

const defaultTransform: TransformToolbarSlot = (slot: ToolbarSlot) => {
    const { NumberOfPages } = slot;
    return Object.assign({}, slot, {
        NumberOfPages: () => (
            <>
                / <NumberOfPages />
            </>
        ),
    });
};

export const DefaultToobar: React.FC<ToolbarSlot> = (toolbarSlot): React.ReactElement =>
    renderDefaultToolbar(defaultTransform)(toolbarSlot);
