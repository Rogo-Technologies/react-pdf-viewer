import { LocalizationContext, MenuItem, type LocalizationMap } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { DownArrowIcon } from './DownArrowIcon';
import { type RenderGoToPageProps } from './types/index';

export const GoToLastPageMenuItem: React.FC<RenderGoToPageProps> = ({ isDisabled, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label =
        l10n && l10n.pageNavigation ? ((l10n.pageNavigation as LocalizationMap).goToLastPage as string) : 'Last page';

    return (
        <MenuItem
            icon={<DownArrowIcon />}
            isDisabled={isDisabled}
            testId="page-navigation__last-menu"
            onClick={onClick}
        >
            {label}
        </MenuItem>
    );
};
