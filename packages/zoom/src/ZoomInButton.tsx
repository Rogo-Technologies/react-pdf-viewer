import {
    isMac,
    LocalizationContext,
    MinimalButton,
    Position,
    Tooltip,
    type LocalizationMap,
} from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type RenderZoomInProps } from './types/RenderZoomInProps';
import { ZoomInIcon } from './ZoomInIcon';

export const ZoomInButton: React.FC<RenderZoomInProps> = ({ enableShortcuts, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.zoom ? ((l10n.zoom as LocalizationMap).zoomIn as string) : 'Zoom in';
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+=' : 'Ctrl+=') : '';

    return (
        <Tooltip
            ariaControlsSuffix="zoom-in"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaKeyShortcuts={ariaKeyShortcuts}
                    ariaLabel={label}
                    testId="zoom__in-button"
                    onClick={onClick}
                >
                    <ZoomInIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
