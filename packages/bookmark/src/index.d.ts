import { type PdfJs, type Plugin } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

// Plugin
export type IsBookmarkExpanded = ({
    bookmark,
    depth,
    doc,
    index,
}: {
    bookmark: PdfJs.Outline;
    depth: number;
    doc: PdfJs.PdfDocument;
    index: number;
}) => boolean;

export interface RenderBookmarkItemProps {
    bookmark: PdfJs.Outline;
    // You can customize the bookmark item based on the default renderers
    defaultRenderItem: (onClickItem: () => void, children: React.ReactNode) => React.ReactElement;
    defaultRenderTitle: (onClickBookmark: () => void) => React.ReactElement;
    defaultRenderToggle: (expandIcon: React.ReactElement, collapseIcon: React.ReactElement) => React.ReactElement;
    depth: number;
    hasSubItems: boolean;
    index: number;
    isExpanded: boolean;
    path: string;
    onClickItem: () => void;
    onClickTitle: () => void;
    onToggleSubItems: () => void;
}

export type RenderBookmarkItem = (props: RenderBookmarkItemProps) => React.ReactElement;

export interface BookmarksProps {
    isBookmarkExpanded?: IsBookmarkExpanded;
    renderBookmarkItem?: RenderBookmarkItem;
}

export interface BookmarkPlugin extends Plugin {
    Bookmarks: (props?: BookmarksProps) => React.ReactElement;
}

export function bookmarkPlugin(): BookmarkPlugin;

// Components
export class DownArrowIcon extends React.Component {}
export class RightArrowIcon extends React.Component {}
