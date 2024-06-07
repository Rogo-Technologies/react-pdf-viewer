'use client';

import { Modal, type Store, type Toggle } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { PropertiesModal } from './PropertiesModal';
import { ShowPropertiesButton } from './ShowPropertiesButton';
import { type RenderShowPropertiesProps } from './types/RenderShowPropertiesProps';
import { type StoreProps } from './types/StoreProps';
import { useDocument } from './useDocument';

type RenderShowProperties = (props: RenderShowPropertiesProps) => React.ReactElement;

export interface ShowPropertiesProps {
    children?: RenderShowProperties;
}

export const ShowProperties: React.FC<{
    children?: RenderShowProperties;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { currentDoc } = useDocument(store);
    const fileName = store.get('fileName') || '';

    const defaultChildren = (props: RenderShowPropertiesProps) => <ShowPropertiesButton {...props} />;
    const render = children || defaultChildren;

    return currentDoc ? (
        <Modal
            ariaControlsSuffix="properties"
            target={(toggle: Toggle) =>
                render({
                    onClick: toggle,
                })
            }
            content={(toggle: Toggle) => <PropertiesModal doc={currentDoc} fileName={fileName} onToggle={toggle} />}
            closeOnClickOutside={true}
            closeOnEscape={true}
        />
    ) : (
        <></>
    );
};
