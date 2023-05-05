"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("S")) {
        squire.changeFormat(null, { tag: "S" });
    }
    else {
        squire.changeFormat({ tag: "S" }, null);
    }
    squire.focus();
}
function isActive(squire) {
    return squire.hasFormat("S");
}
function isDisabled(squire) {
    // Check if a block node already enforces this styling, if so
    // disable this feature.
    var blockOverwrites = false;
    squire.forEachBlock(function (n) {
        if (window
            .getComputedStyle(n)
            .getPropertyValue("text-decoration") === "line-through") {
            blockOverwrites = true;
            // Terminate loop.
            return true;
        }
        return false;
    });
    return blockOverwrites;
}
var Strike = (0, createToggle_1.default)(execCommand, {
    isActive: isActive,
    isDisabled: isDisabled,
    shortcuts: function (ctrlKey) {
        var _a;
        return (_a = {},
            _a[ctrlKey + "s"] = execCommand,
            _a);
    },
});
Strike.defaultProps = {
    children: react_1.default.createElement("s", null, "S"),
};
exports.default = Strike;
//# sourceMappingURL=Strike.js.map