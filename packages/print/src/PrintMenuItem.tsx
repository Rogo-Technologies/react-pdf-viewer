import { LocalizationContext, MenuItem, type LocalizationMap } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { PrintIcon } from './PrintIcon';

export interface PrintMenuItemProps {
    onClick(): void;
}

export const PrintMenuItem: React.FC<PrintMenuItemProps> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.print ? ((l10n.print as LocalizationMap).print as string) : 'Print';

    return (
        <MenuItem icon={<PrintIcon />} testId="print__menu" onClick={onClick}>
            {label}
        </MenuItem>
    );
};
