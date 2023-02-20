/**
 * Traverse ancestors until we find an HTMLElement.
 */
export default function getHTMLElement(node) {
    if (node.nodeType === 1) {
        return node;
    }
    return getHTMLElement(node.parentNode);
}
//# sourceMappingURL=getHTMLElement.js.map