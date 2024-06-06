import { type Plugin } from '@react-pdf-viewer/core';
import * as React from 'react';

// Plugin
export interface AttachmentPlugin extends Plugin {
    Attachments: () => React.ReactElement;
}

export function attachmentPlugin(): AttachmentPlugin;
