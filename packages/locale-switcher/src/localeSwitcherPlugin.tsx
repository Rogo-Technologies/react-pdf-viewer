'use client';

import { type Plugin } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { LocalePopover, LocalePopoverProps } from './LocalePopover';

export interface LocaleSwitcherPlugin extends Plugin {
    LocalePopover: (props: LocalePopoverProps) => React.ReactElement;
}

export const localeSwitcherPlugin = (): LocaleSwitcherPlugin => {
    const LocalePopoverDecorator = (props: LocalePopoverProps) => <LocalePopover {...props} />;

    return {
        LocalePopover: LocalePopoverDecorator,
    };
};
