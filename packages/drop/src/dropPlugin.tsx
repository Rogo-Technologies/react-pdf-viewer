import { type Plugin, type RenderViewer, type Slot } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { DropArea } from './DropArea';

export const dropPlugin = (): Plugin => {
    const renderViewer = (props: RenderViewer): Slot => {
        const { slot } = props;

        if (slot.attrs) {
            const styles = slot.attrs && slot.attrs.style ? slot.attrs.style : {};
            const updateStyle: React.CSSProperties = {
                ...styles,
                ...{
                    height: '100%',
                    position: 'relative',
                    width: '100%',
                },
            };
            slot.attrs.style = updateStyle;
        }

        slot.children = (
            <>
                <DropArea containerRef={props.containerRef} openFile={props.openFile} />
                {slot.children}
            </>
        );

        return slot;
    };

    return {
        renderViewer,
    };
};
