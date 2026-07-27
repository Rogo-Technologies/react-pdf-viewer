// Port of pdf.js TextLayerBuilder's selection handling (web/text_layer_builder.js), which the
// low-level pdf.js TextLayer class omits; without it Chromium balloons gap-crossing drags.

const SELECTING_CLASS = 'rpv-core__text-layer--selecting';
const END_OF_CONTENT_CLASS = 'rpv-core__text-layer-end-of-content';
const TEXT_LAYER_CLASS = 'rpv-core__text-layer';
// Opts the div out of TextLayer.tsx's post-render span classing so `empty()` never deletes it.
const SKIP_SPAN_CLASSING_CLASS = 'rpv-core__text-layer-text--not';

// Shared across every mounted text layer, mirroring pdf.js's static TextLayerBuilder registry.
const textLayers = new Map<HTMLElement, { endOfContent: HTMLElement; detach: () => void }>();
let globalListeners: AbortController | null = null;
let previousRange: Range | null = null;
let cachedIsFirefox: boolean | null = null;

const resetLayer = (textLayer: HTMLElement, endOfContent: HTMLElement): void => {
    textLayer.append(endOfContent);
    endOfContent.style.width = '';
    endOfContent.style.height = '';
    textLayer.classList.remove(SELECTING_CLASS);
};

const teardownGlobalListenersIfEmpty = (): void => {
    if (textLayers.size === 0) {
        globalListeners?.abort();
        globalListeners = null;
        previousRange = null;
    }
};

const resetAllLayers = (): void => {
    textLayers.forEach(({ endOfContent }, layer) => resetLayer(layer, endOfContent));
};

const isFirefox = (): boolean => {
    if (cachedIsFirefox === null) {
        const anyEntry = textLayers.values().next().value;
        if (!anyEntry) {
            return false;
        }
        cachedIsFirefox = getComputedStyle(anyEntry.endOfContent).getPropertyValue('-moz-user-select') === 'none';
    }
    return cachedIsFirefox;
};

const handleSelectionChange = (): void => {
    if (textLayers.size === 0) {
        return;
    }

    const selection = document.getSelection();
    if (!selection || selection.rangeCount === 0) {
        resetAllLayers();
        return;
    }

    const activeLayers = new Set<HTMLElement>();
    for (let rangeIndex = 0; rangeIndex < selection.rangeCount; rangeIndex++) {
        const range = selection.getRangeAt(rangeIndex);
        textLayers.forEach((_entry, layer) => {
            if (!activeLayers.has(layer) && range.intersectsNode(layer)) {
                activeLayers.add(layer);
            }
        });
    }
    textLayers.forEach(({ endOfContent }, layer) => {
        if (activeLayers.has(layer)) {
            layer.classList.add(SELECTING_CLASS);
        } else {
            resetLayer(layer, endOfContent);
        }
    });

    // Firefox extends selection across gaps sensibly on its own; only Chromium needs the div moved.
    if (isFirefox()) {
        return;
    }

    const range = selection.getRangeAt(0);
    const modifyStart =
        previousRange !== null &&
        (range.compareBoundaryPoints(Range.END_TO_END, previousRange) === 0 ||
            range.compareBoundaryPoints(Range.START_TO_END, previousRange) === 0);
    const anchorNode = modifyStart ? range.startContainer : range.endContainer;
    const anchor = anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
    if (anchor instanceof HTMLElement) {
        const layer = anchor.parentElement?.closest<HTMLElement>(`.${TEXT_LAYER_CLASS}`);
        const entry = layer ? textLayers.get(layer) : undefined;
        if (layer && entry) {
            entry.endOfContent.style.width = layer.style.width;
            entry.endOfContent.style.height = layer.style.height;
            anchor.parentElement?.insertBefore(entry.endOfContent, modifyStart ? anchor : anchor.nextSibling);
        }
    }
    previousRange = range.cloneRange();
};

const ensureGlobalListeners = (): void => {
    if (globalListeners) {
        return;
    }
    globalListeners = new AbortController();
    const { signal } = globalListeners;
    document.addEventListener('pointerup', resetAllLayers, { signal });
    document.addEventListener('keyup', resetAllLayers, { signal });
    window.addEventListener('blur', resetAllLayers, { signal });
    document.addEventListener('selectionchange', handleSelectionChange, { signal });
};

// Returns a cleanup function that detaches the layer and removes the injected div.
export const attachTextLayerSelection = (textLayer: HTMLElement): (() => void) => {
    // A render chain resolving after unmount would otherwise pin the detached layer here forever.
    if (!textLayer.isConnected) {
        return () => {};
    }
    const existing = textLayers.get(textLayer);
    if (existing) {
        return existing.detach;
    }
    const endOfContent = document.createElement('div');
    endOfContent.className = `${END_OF_CONTENT_CLASS} ${SKIP_SPAN_CLASSING_CLASS}`;
    textLayer.append(endOfContent);
    const handleMouseDown = (): void => {
        textLayer.classList.add(SELECTING_CLASS);
    };
    textLayer.addEventListener('mousedown', handleMouseDown);
    // Idempotent so a Strict Mode double-attach can hand both effect instances the same detach.
    const detach = (): void => {
        textLayer.removeEventListener('mousedown', handleMouseDown);
        endOfContent.remove();
        textLayers.delete(textLayer);
        teardownGlobalListenersIfEmpty();
    };
    textLayers.set(textLayer, { endOfContent, detach });
    ensureGlobalListeners();
    return detach;
};
