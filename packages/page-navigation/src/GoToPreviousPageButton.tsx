'use client';

import {
    LocalizationContext,
    MinimalButton,
    Position,
    Tooltip,
    type LocalizationMap,
} from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { PreviousIcon } from './PreviousIcon';
import { type RenderGoToPageProps } from './types/index';

export const GoToPreviousPageButton: React.FC<RenderGoToPageProps> = ({ isDisabled, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label =
        l10n && l10n.pageNavigation
            ? ((l10n.pageNavigation as LocalizationMap).goToPreviousPage as string)
            : 'Previous page';

    return (
        <Tooltip
            ariaControlsSuffix="page-navigation-previous"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaLabel={label}
                    isDisabled={isDisabled}
                    testId="page-navigation__previous-button"
                    onClick={onClick}
                >
                    <PreviousIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
