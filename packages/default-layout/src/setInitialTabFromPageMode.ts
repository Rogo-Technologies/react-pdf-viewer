import { type PdfJs } from '@rogo-technologies/react-pdf-viewer-core';
import { PageMode } from '@rogo-technologies/react-pdf-viewer-core';

export const setInitialTabFromPageMode = (doc: PdfJs.PdfDocument) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new Promise<number>((resolve, _) => {
        doc.getPageMode().then((pageMode) => {
            if (!pageMode) {
                resolve(-1);
            } else {
                switch (pageMode) {
                    case PageMode.Attachments:
                        resolve(2);
                        break;
                    case PageMode.Bookmarks:
                        resolve(1);
                        break;
                    case PageMode.Thumbnails:
                        resolve(0);
                        break;
                    default:
                        resolve(-1);
                        break;
                }
            }
        });
    });
