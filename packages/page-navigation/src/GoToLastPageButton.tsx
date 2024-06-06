import {
    LocalizationContext,
    MinimalButton,
    Position,
    Tooltip,
    type LocalizationMap,
} from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { DownArrowIcon } from './DownArrowIcon';
import { type RenderGoToPageProps } from './types/index';

export const GoToLastPageButton: React.FC<RenderGoToPageProps> = ({ isDisabled, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label =
        l10n && l10n.pageNavigation ? ((l10n.pageNavigation as LocalizationMap).goToLastPage as string) : 'Last page';

    return (
        <Tooltip
            ariaControlsSuffix="page-navigation-last"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaLabel={label}
                    isDisabled={isDisabled}
                    testId="page-navigation__last-button"
                    onClick={onClick}
                >
                    <DownArrowIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
