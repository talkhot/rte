var browserInfo = null;
export function getBrowserInfo() {
    if (!browserInfo) {
        browserInfo = {
            macOS: /Mac OS X/.test(navigator.userAgent),
        };
    }
    return browserInfo;
}
//# sourceMappingURL=browserInfo.js.map