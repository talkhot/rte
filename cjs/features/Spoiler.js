"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire, props) {
    var attributes = { class: props.spoilerClassName };
    if (squire.hasFormat("SPAN", attributes)) {
        squire.changeFormat(null, { tag: "SPAN", attributes: attributes });
    }
    else {
        squire.changeFormat({ tag: "SPAN", attributes: attributes }, null);
    }
    squire.focus();
}
function isActive(squire, props) {
    var attributes = { class: props.spoilerClassName };
    return squire.hasFormat("SPAN", attributes);
}
var Spoiler = createToggle_1.default(execCommand, {
    isActive: isActive,
});
Spoiler.defaultProps = {
    children: "Spoiler",
    spoilerClassName: "coral-rte-spoiler",
};
exports.default = Spoiler;
//# sourceMappingURL=Spoiler.js.map