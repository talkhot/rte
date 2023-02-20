import createToggle from "../factories/createToggle";
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
var Bold = createToggle(execCommand, {
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
export default Bold;
//# sourceMappingURL=Bold.js.map