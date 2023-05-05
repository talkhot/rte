"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
var PROTOCOL_REGEXP = /^([a-zA-Z]+:\/\/)/;
/**
 * Enforces contents of links to match their href.
 * @param element HTMLAnchorElement or HTMLElement potentially container anchor elements
 */
function syncLinkHrefWithContent(element) {
    if (element.tagName === "A") {
        var anchorElement = element;
        try {
            var content = anchorElement.textContent || "";
            var isEmail = EMAIL_REGEXP.test(content);
            // Handle mailto case.
            if (isEmail) {
                anchorElement.href = "mailto:".concat(content);
                return;
            }
            // Handle rest.
            var urlContent = content;
            if (!PROTOCOL_REGEXP.test(urlContent)) {
                // Add default protocol if none was set.
                urlContent = "http://" + content;
            }
            var url = new URL(urlContent);
            anchorElement.href = url.toString();
        }
        catch (e) {
            // URL was invalid, use a `href` that does nothing.
            anchorElement.href = "javascript:;";
        }
        return;
    }
    var anchorElements = element.getElementsByTagName("a");
    for (var i = 0; i < anchorElements.length; i++) {
        syncLinkHrefWithContent(anchorElements[i]);
    }
}
exports.default = syncLinkHrefWithContent;
//# sourceMappingURL=syncLinkHrefWithContent.js.map