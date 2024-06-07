import { type Plugin } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

// Types
export interface SwitchThemeProps {
    children?: (props: RenderSwitchThemeProps) => React.ReactElement;
}

export interface SwitchThemeMenuItemProps {
    onClick(): void;
}

export interface RenderSwitchThemeProps {
    onClick(): void;
}

// Plugin
export interface ThemePlugin extends Plugin {
    SwitchTheme: (props: SwitchThemeProps) => React.ReactElement;
    SwitchThemeButton: () => React.ReactElement;
    SwitchThemeMenuItem: (props: SwitchThemeMenuItemProps) => React.ReactElement;
}

export function themePlugin(): ThemePlugin;

// Components
export class DarkIcon extends React.Component {}
export class LightIcon extends React.Component {}
