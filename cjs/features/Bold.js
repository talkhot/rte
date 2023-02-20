"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("B")) {
        squire.removeBold();
    }
    else {
        squire.bold();
    }
}
function isActive(squire) {
    return squire.hasFormat("B");
}
var Bold = createToggle_1.default(execCommand, {
    isActive: isActive,
    shortcuts: function (ctrlKey) {
        var _a;
        return (_a = {},
            _a[ctrlKey + "b"] = execCommand,
            _a);
    },
});
Bold.defaultProps = {
    children: "Bold",
};
exports.default = Bold;
//# sourceMappingURL=Bold.js.map