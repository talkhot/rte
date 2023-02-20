import createToggle from "../factories/createToggle";
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
var Italic = createToggle(execCommand, {
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
export default Italic;
//# sourceMappingURL=Italic.js.map