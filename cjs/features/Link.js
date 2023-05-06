"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("A")) {
        squire.removeLink();
    }
    else {
        try {
            squire.makeLink("https://wwww.test.com", { target: "_blank" });
        }
        catch (error) {
            console.log(error);
        }
    }
}
function isActive(squire) {
    return squire.hasFormat("A");
}
var Link = (0, createToggle_1.default)(execCommand, {
    isActive: isActive,
    shortcuts: function (ctrlKey) {
        var _a;
        return (_a = {},
            _a[ctrlKey + "k"] = execCommand,
            _a);
    },
});
Link.defaultProps = {
    children: "Link",
};
exports.default = Link;
//# sourceMappingURL=Link.js.map