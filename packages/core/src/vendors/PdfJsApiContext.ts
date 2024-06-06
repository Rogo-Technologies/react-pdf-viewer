import * as React from 'react';
import { type PdfJsApiProvider } from '../types/PdfJsApiProvider';

export interface PdfJsApiContextProps {
    pdfJsApiProvider?: PdfJsApiProvider;
}

export const PdfJsApiContext = React.createContext<PdfJsApiContextProps>({});
