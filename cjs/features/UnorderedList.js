"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("UL")) {
        squire.removeList();
    }
    else {
        squire.makeUnorderedList();
    }
}
function isActive(squire) {
    return squire.hasFormat("UL");
}
var UnorderedList = createToggle_1.default(execCommand, { isActive: isActive });
UnorderedList.defaultProps = {
    children: "Unordered List",
};
exports.default = UnorderedList;
//# sourceMappingURL=UnorderedList.js.map