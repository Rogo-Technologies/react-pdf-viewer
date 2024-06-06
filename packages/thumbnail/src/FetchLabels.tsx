import { useSafeState, type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

export const FetchLabels: React.FC<{
    children: (labels: string[]) => React.ReactElement;
    doc: PdfJs.PdfDocument;
}> = ({ children, doc }) => {
    const [status, setStatus] = useSafeState<{
        loading: boolean;
        labels: string[];
    }>({
        loading: true,
        labels: [],
    });

    React.useEffect(() => {
        doc.getPageLabels().then((result) => {
            setStatus({ loading: false, labels: result || [] });
        });
    }, [doc.loadingTask.docId]);

    return status.loading ? <></> : children(status.labels);
};
