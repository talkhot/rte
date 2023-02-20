"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createToggle_1 = __importDefault(require("../factories/createToggle"));
function execCommand(squire) {
    if (squire.hasFormat("OL")) {
        squire.removeList();
    }
    else {
        squire.makeOrderedList();
    }
}
function isActive(squire) {
    return squire.hasFormat("OL");
}
var OrderedList = createToggle_1.default(execCommand, { isActive: isActive });
OrderedList.defaultProps = {
    children: "Ordered List",
};
exports.default = OrderedList;
//# sourceMappingURL=OrderedList.js.map