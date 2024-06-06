import {
    type EnterFullScreenMenuItemProps,
    type EnterFullScreenProps,
} from '@rogo-technologies/react-pdf-viewer-full-screen';
import { type DownloadMenuItemProps, type DownloadProps } from '@rogo-technologies/react-pdf-viewer-get-file';
import { type OpenProps } from '@rogo-technologies/react-pdf-viewer-open';
import {
    type CurrentPageLabelProps,
    type GoToPageMenuItemProps,
    type GoToPageProps,
    type NumberOfPagesProps,
} from '@rogo-technologies/react-pdf-viewer-page-navigation';
import { type PrintMenuItemProps, type PrintProps } from '@rogo-technologies/react-pdf-viewer-print';
import {
    type ShowPropertiesMenuItemProps,
    type ShowPropertiesProps,
} from '@rogo-technologies/react-pdf-viewer-properties';
import { type RotateDecoratorProps, type RotateProps } from '@rogo-technologies/react-pdf-viewer-rotate';
import {
    type SwitchScrollModeMenuItemProps,
    type SwitchScrollModeProps,
    type SwitchViewModeMenuItemProps,
    type SwitchViewModeProps,
} from '@rogo-technologies/react-pdf-viewer-scroll-mode';
import { type SearchProps, type ShowSearchPopoverProps } from '@rogo-technologies/react-pdf-viewer-search';
import {
    type SwitchSelectionModeMenuItemProps,
    type SwitchSelectionModeProps,
} from '@rogo-technologies/react-pdf-viewer-selection-mode';
import { type SwitchThemeMenuItemProps, type SwitchThemeProps } from '@rogo-technologies/react-pdf-viewer-theme';
import {
    type CurrentScaleProps,
    type ZoomInProps,
    type ZoomMenuItemProps,
    type ZoomOutProps,
    type ZoomProps,
} from '@rogo-technologies/react-pdf-viewer-zoom';
import * as React from 'react';

export interface ToolbarSlot {
    CurrentPageInput(): React.ReactElement;
    CurrentPageLabel(props: CurrentPageLabelProps): React.ReactElement;
    CurrentScale(props: CurrentScaleProps): React.ReactElement;
    GoToFirstPage(props: GoToPageProps): React.ReactElement;
    GoToFirstPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    GoToLastPage(props: GoToPageProps): React.ReactElement;
    GoToLastPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    GoToNextPage(props: GoToPageProps): React.ReactElement;
    GoToNextPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    GoToPreviousPage(props: GoToPageProps): React.ReactElement;
    GoToPreviousPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    NumberOfPages(props: NumberOfPagesProps): React.ReactElement;

    Download(props: DownloadProps): React.ReactElement;
    DownloadMenuItem(props: DownloadMenuItemProps): React.ReactElement;

    EnterFullScreen(props: EnterFullScreenProps): React.ReactElement;
    EnterFullScreenMenuItem(props: EnterFullScreenMenuItemProps): React.ReactElement;

    Open(props: OpenProps): React.ReactElement;
    OpenMenuItem(): React.ReactElement;

    Print(props: PrintProps): React.ReactElement;
    PrintMenuItem(props: PrintMenuItemProps): React.ReactElement;

    Rotate(props: RotateProps): React.ReactElement;
    RotateBackwardMenuItem(props: RotateDecoratorProps): React.ReactElement;
    RotateForwardMenuItem(props: RotateDecoratorProps): React.ReactElement;

    Search(props: SearchProps): React.ReactElement;
    ShowSearchPopover(props: ShowSearchPopoverProps): React.ReactElement;

    ShowProperties(props: ShowPropertiesProps): React.ReactElement;
    ShowPropertiesMenuItem(props: ShowPropertiesMenuItemProps): React.ReactElement;

    SwitchScrollMode(props: SwitchScrollModeProps): React.ReactElement;
    SwitchScrollModeMenuItem(props: SwitchScrollModeMenuItemProps): React.ReactElement;

    SwitchSelectionMode(props: SwitchSelectionModeProps): React.ReactElement;
    SwitchSelectionModeMenuItem(props: SwitchSelectionModeMenuItemProps): React.ReactElement;

    SwitchViewMode(props: SwitchViewModeProps): React.ReactElement;
    SwitchViewModeMenuItem(props: SwitchViewModeMenuItemProps): React.ReactElement;

    SwitchTheme(props: SwitchThemeProps): React.ReactElement;
    SwitchThemeMenuItem(props: SwitchThemeMenuItemProps): React.ReactElement;

    Zoom(props: ZoomProps): React.ReactElement;
    ZoomIn(props: ZoomInProps): React.ReactElement;
    ZoomInMenuItem(props: ZoomMenuItemProps): React.ReactElement;
    ZoomOut(props: ZoomOutProps): React.ReactElement;
    ZoomOutMenuItem(props: ZoomMenuItemProps): React.ReactElement;
}
