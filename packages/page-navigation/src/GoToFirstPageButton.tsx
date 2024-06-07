'use client';

import {
    LocalizationContext,
    MinimalButton,
    Position,
    Tooltip,
    type LocalizationMap,
} from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { UpArrowIcon } from './UpArrowIcon';
import { type RenderGoToPageProps } from './types/index';

export const GoToFirstPageButton: React.FC<RenderGoToPageProps> = ({ isDisabled, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label =
        l10n && l10n.pageNavigation ? ((l10n.pageNavigation as LocalizationMap).goToFirstPage as string) : 'First page';

    return (
        <Tooltip
            ariaControlsSuffix="page-navigation-first"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaLabel={label}
                    isDisabled={isDisabled}
                    testId="page-navigation__first-button"
                    onClick={onClick}
                >
                    <UpArrowIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
