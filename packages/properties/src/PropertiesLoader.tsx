'use client';

import { Spinner, type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';
import { type PropertiesData } from './types/PropertiesData';

export const PropertiesLoader: React.FC<{
    doc: PdfJs.PdfDocument;
    render(doc: PropertiesData): React.ReactElement;
}> = ({ doc, render }) => {
    const [data, setData] = React.useState<PropertiesData>();

    React.useEffect(() => {
        doc.getMetadata()
            .then((meta) => {
                return Promise.resolve(meta);
            })
            .then((meta) => {
                return doc.getDownloadInfo().then((d) => {
                    return Promise.resolve({
                        fileName: meta.contentDispositionFilename || '',
                        info: meta.info,
                        length: d.length,
                    });
                });
            })
            .then((response) => {
                setData(response);
            });
    }, []);

    return data ? (
        render(data)
    ) : (
        <div className="rpv-properties__loader">
            <Spinner />
        </div>
    );
};
