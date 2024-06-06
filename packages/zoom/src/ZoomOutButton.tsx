import {
    isMac,
    LocalizationContext,
    MinimalButton,
    Position,
    Tooltip,
    type LocalizationMap,
} from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type RenderZoomOutProps } from './types/RenderZoomOutProps';
import { ZoomOutIcon } from './ZoomOutIcon';

export const ZoomOutButton: React.FC<RenderZoomOutProps> = ({ enableShortcuts, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.zoom ? ((l10n.zoom as LocalizationMap).zoomOut as string) : 'Zoom out';
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+-' : 'Ctrl+-') : '';

    return (
        <Tooltip
            ariaControlsSuffix="zoom-out"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaKeyShortcuts={ariaKeyShortcuts}
                    ariaLabel={label}
                    testId="zoom__out-button"
                    onClick={onClick}
                >
                    <ZoomOutIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
