import React from "react";
import createToggle from "../factories/createToggle";
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
var Strike = createToggle(execCommand, {
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
    children: React.createElement("s", null, "S"),
};
export default Strike;
//# sourceMappingURL=Strike.js.map