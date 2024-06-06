import { type PdfJs } from './PdfJs';

export interface PdfJsApiProvider {
    getDocument(params: PdfJs.GetDocumentParams): PdfJs.LoadingTask;

    // Worker
    PDFWorker: PdfJs.PDFWorkerConstructor;
    GlobalWorkerOptions: PdfJs.GlobalWorker;

    // Loading task
    PasswordResponses: PdfJs.PasswordResponsesValue;

    // Render SVG
    SVGGraphics: PdfJs.SVGGraphicsConstructor;

    // Render text layer
    renderTextLayer(params: PdfJs.RenderTextLayerParams): PdfJs.PageRenderTask;
}
