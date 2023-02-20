"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Traverse ancestors until we find an HTMLElement.
 */
function getHTMLElement(node) {
    if (node.nodeType === 1) {
        return node;
    }
    return getHTMLElement(node.parentNode);
}
exports.default = getHTMLElement;
//# sourceMappingURL=getHTMLElement.js.map