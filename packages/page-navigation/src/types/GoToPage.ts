import * as React from 'react';

export interface GoToPageMenuItemProps {
    onClick: () => void;
}

export interface RenderGoToPageProps {
    isDisabled: boolean;
    onClick: () => void;
}

export type RenderGoToPage = (props: RenderGoToPageProps) => React.ReactElement;

export interface GoToPageProps {
    children?: RenderGoToPage;
}
