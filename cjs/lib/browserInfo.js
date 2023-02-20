"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserInfo = void 0;
var browserInfo = null;
function getBrowserInfo() {
    if (!browserInfo) {
        browserInfo = {
            macOS: /Mac OS X/.test(navigator.userAgent),
        };
    }
    return browserInfo;
}
exports.getBrowserInfo = getBrowserInfo;
//# sourceMappingURL=browserInfo.js.map