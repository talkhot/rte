"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("I")) {
        squire.removeItalic();
    }
    else {
        squire.italic();
    }
}
function isActive(squire) {
    return squire.hasFormat("I");
}
function isDisabled(squire) {
    // Check if a block node already enforces this styling, if so
    // disable this feature.
    var blockOverwrites = false;
    squire.forEachBlock(function (n) {
        if (window.getComputedStyle(n).getPropertyValue("font-style") ===
            "italic") {
            blockOverwrites = true;
            // Terminate loop.
            return true;
        }
        return false;
    });
    return blockOverwrites;
}
var Italic = (0, createToggle_1.default)(execCommand, {
    isActive: isActive,
    isDisabled: isDisabled,
    shortcuts: function (ctrlKey) {
        var _a;
        return (_a = {},
            _a[ctrlKey + "i"] = execCommand,
            _a);
    },
});
Italic.defaultProps = {
    children: "Italic",
};
exports.default = Italic;
//# sourceMappingURL=Italic.js.map