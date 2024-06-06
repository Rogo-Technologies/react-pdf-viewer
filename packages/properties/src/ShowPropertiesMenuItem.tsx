import { LocalizationContext, MenuItem, type LocalizationMap } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { InfoIcon } from './InfoIcon';
import { type RenderShowPropertiesProps } from './types/RenderShowPropertiesProps';

export const ShowPropertiesMenuItem: React.FC<RenderShowPropertiesProps> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label =
        l10n && l10n.properties ? ((l10n.properties as LocalizationMap).showProperties as string) : 'Show properties';

    return (
        <MenuItem icon={<InfoIcon />} testId="properties__menu" onClick={onClick}>
            {label}
        </MenuItem>
    );
};
