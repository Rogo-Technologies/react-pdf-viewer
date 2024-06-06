import { LocalizationContext, MenuItem, type LocalizationMap } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { DownloadIcon } from './DownloadIcon';

export interface DownloadMenuItemProps {
    onClick(): void;
}

export const DownloadMenuItem: React.FC<DownloadMenuItemProps> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.download ? ((l10n.download as LocalizationMap).download as string) : 'Download';

    return (
        <MenuItem icon={<DownloadIcon />} testId="get-file__download-menu" onClick={onClick}>
            {label}
        </MenuItem>
    );
};
