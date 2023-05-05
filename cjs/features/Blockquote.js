"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("BLOCKQUOTE")) {
        squire.decreaseQuoteLevel();
    }
    else {
        squire.increaseQuoteLevel();
    }
}
function isActive(squire) {
    return squire.hasFormat("BLOCKQUOTE");
}
var Blockquote = (0, createToggle_1.default)(execCommand, { isActive: isActive });
Blockquote.defaultProps = {
    children: "Blockquote",
};
exports.default = Blockquote;
//# sourceMappingURL=Blockquote.js.map