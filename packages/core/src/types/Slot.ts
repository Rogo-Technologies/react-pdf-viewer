import * as React from 'react';

export interface Attr extends React.HTMLAttributes<HTMLDivElement> {
    'data-testid'?: string;
    ref?: React.MutableRefObject<HTMLDivElement | null>;
}

export interface Slot {
    attrs?: Attr;
    children?: React.ReactNode;
    subSlot?: Slot;
}
