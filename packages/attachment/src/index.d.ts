import { type Plugin } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

// Plugin
export interface AttachmentPlugin extends Plugin {
    Attachments: () => React.ReactElement;
}

export function attachmentPlugin(): AttachmentPlugin;
