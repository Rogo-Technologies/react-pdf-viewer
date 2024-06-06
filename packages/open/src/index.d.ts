import { type Plugin } from '@react-pdf-viewer/core';
import * as React from 'react';

// Types
export interface OpenProps {
    children?: (props: RenderOpenProps) => React.ReactElement;
}

export interface RenderOpenProps {
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Plugin
export interface OpenPlugin extends Plugin {
    Open: (props: OpenProps) => React.ReactElement;
    OpenButton: () => React.ReactElement;
    OpenMenuItem: () => React.ReactElement;
}

export interface OpenPluginProps {
    enableShortcuts?: boolean;
}

export function openPlugin(props?: OpenPluginProps): OpenPlugin;

// Components
export class OpenFileIcon extends React.Component {}
