export const wrap = (ele: Node, startOffset: number, endOffset: number): HTMLElement => {
    const range = new Range();
    range.setStart(ele, startOffset);
    range.setEnd(ele, endOffset);

    const wrapper = document.createElement('span');
    range.surroundContents(wrapper);
    return wrapper;
};
