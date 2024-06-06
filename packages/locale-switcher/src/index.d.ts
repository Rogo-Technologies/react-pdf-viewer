import { type LocalizationMap, type Plugin } from '@react-pdf-viewer/core';
import * as React from 'react';

// Types
export interface LocalePopoverProps {
    initialLocale?: string;
    locales: {
        [locale: string]: string;
    };
    localizations: {
        [locale: string]: LocalizationMap;
    };
    onUpdateLocalization: (locale: string, localization: LocalizationMap) => void;
}

// Plugin
export interface LocaleSwitcherPlugin extends Plugin {
    LocalePopover: (props: LocalePopoverProps) => React.ReactElement;
}

export function localeSwitcherPlugin(): LocaleSwitcherPlugin;

// Components
export class LocaleIcon extends React.Component {}
